import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {Resource} from '../interfaces'
import { PrismaClientValidationError } from "@prisma/client/runtime/library";


@Injectable({})
export class ResourceService {
    constructor(private prisma: PrismaService){}

    async createResource(dto: Resource){
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

    async getResource(){
        try{
             const resource = await this.prisma.resource.findMany({
                orderBy: {id:"asc"}
             })
             return resource
        } catch(error){
            if(error instanceof PrismaClientValidationError){
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
            }
            throw new Error(error)
        }
        
    }

    async getResourceById(id: string){
        try{
            const resource = await this.prisma.resource.findUnique({ where: { id: Number(id) } })
            if(Object.keys(resource).length > 0) {
                console.log('this is our resource', resource)
                return resource
            } else{
                throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
            }
        } catch(error){
            throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async updateResource(id: string, dto: Resource){
        const {localization, model, name, others, photo, price, responsible, serial, status, type} = dto
        try{
            const resource = await this.prisma.resource.update({
                where:{ id: Number(id)},
                data:{
                    id: Number(id),
                    updatedAt: new Date(),
                    localization,
                    model,
                    name,
                    others,
                    photo,
                    price, 
                    responsible,
                    serial,
                    status, 
                    type
                }
            })
            return resource
            
        } catch (error){
            throw new HttpException('Not Acceptable', HttpStatus.NOT_ACCEPTABLE)
        }
    }

    async deleteResource(id: string){
        try{
           const resource = await this.prisma.resource.delete({
                where:{
                    id: Number(id)
                }
            })
            return resource

        } catch(error){
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND)
        }
    } 
}