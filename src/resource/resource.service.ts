import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import {ResourceDto} from '../types'


@Injectable({})
export class ResourceService{
    constructor(private prisma: PrismaService, private config: ConfigService){}
    async sendData(dto: ResourceDto){
        const resource = await this.prisma.resource.create({
            data:{
                model: dto.model,
                name: dto.name,
                photo: dto.photo,
                qrCode:dto.qrCode,
                responsible: dto.qrCode,
                serial: dto.serial,
                type: dto.type,
                localization: dto.localization ? dto.localization : null,
                price: dto.price ? dto.price : null
            }
        })
        return {

        }
    }

    async getData(){}
}