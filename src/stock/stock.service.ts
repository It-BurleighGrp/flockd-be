import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClientValidationError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import {Stock} from 'src/types'

@Injectable({})
export class StockService {
    constructor(private prisma: PrismaService){}
    async createStockResource(dto: Stock){
        try {
            await this.prisma.stock.create({
                data:{
                    name: dto.name,
                    quantity: dto.quantity,
                    type: dto.type
                }
            })
        } catch (error) {
            if(error instanceof PrismaClientValidationError){
                throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST)
            }
            throw new Error(error)
        }
    }
    async getStockResource(){
        try{
            const stockResource = await this.prisma.stock.findMany({
                orderBy:{id: "asc"}
            })
            return stockResource
        } catch(error){
            if(error instanceof PrismaClientValidationError){
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
            }
            throw new Error(error)
        }
    }
    async updateStockResource(){}


    async deleteStockResource(id: string){
        try {
            const stockResource = await this.prisma.stock.delete({
                where: {
                    id: Number(id)
                }
            })
            return stockResource
        } catch (error) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
        }
    }
}
