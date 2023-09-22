import {Req, Res, Injectable, ForbiddenException, HttpException, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import {Resource} from '../types'
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";


@Injectable({})
export class ResourceService{
    constructor(private prisma: PrismaService, private config: ConfigService){}
    async sendData(dto: Resource){
        try{
            await this.prisma.resource.create({
                data:{
                    name: dto.name,
                    model: dto.model,
                    type: dto.type,
                    serial: dto.serial,
                    photo: dto.photo,
                    responsible: dto.responsible,
                    others: dto.others,
                    status: dto.status,
                    localization: dto.localization ? dto.localization : null,
                    price: dto.price ? dto.price : null
                }
            })
            return {
                message: 'The resource was created successfully'
            }
        } catch(error){
            if(error instanceof PrismaClientValidationError){
                throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
            }
            throw new Error(error)
        }
        
    }

    async getData(){
        try{
             const resource = await this.prisma.resource.findMany()
             return resource
        } catch(error){
            if(error instanceof PrismaClientValidationError){
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
            }
            throw new Error(error)
        }
        
    }
}