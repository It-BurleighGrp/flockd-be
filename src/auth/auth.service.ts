import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TUserAuth } from 'src/interfaces';
import * as argon2 from 'argon2'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService, private config:ConfigService){}
    async signup({email, password}: TUserAuth){
        const hash = await argon2.hash(password)
        try{

            const user = await this.prisma.users.create({
                data: {
                    email:email,
                    hash: hash,
                    role: 'Software Engineer',
                },
            })
            return user
        }
        catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Credentials Taken')
                }
            }
        }
    }

    async signin({email, password}: TUserAuth){
        const user = await this.prisma.users.findUnique({
            where:{
                email
            }
        })

        if(!user){
            throw new ForbiddenException('Credentials incorrect')
        }
        
        const pwMatches = await argon2.verify(user.hash, password)
        
        if(!pwMatches){
            throw new ForbiddenException('Credentials incorrect')
        }

        return this.signToken(user.id, user.email)
    }

    async signToken(userId:number, email:string): Promise<{access_token: string}> {
        const payload = {
            sub: userId,
            email
        }

        const secret = this.config.get("JWT_SECRET")

        const token = await this.jwt.signAsync(payload,{
            expiresIn: '15m',
            secret: secret
        })

        return {
            access_token: token
        }
        
    }
}
