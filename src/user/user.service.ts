import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class UserService {
    constructor(private prisma: PrismaService){}
    async createUser() {
        console.log('user created')
    }
    async getUser() {
        console.log('Get User')
        return {
            "status": "200",
            "message": "Get User!"
        }
    }
    async updateUser() {
        console.log('Update User')
    }
    async deleteUser() {
        console.log('Delete User')
    }


}
