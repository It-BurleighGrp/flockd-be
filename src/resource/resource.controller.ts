import { Body, Post, Get, Controller } from "@nestjs/common";
import {Resource} from '../types'
import { ResourceService } from "./resource.service";

@Controller()
    export class ResourceController{
        constructor(private resource: ResourceService){}
        @Post('send')
            sendData(@Body() dto: Resource){
                return this.resource.sendData(dto)
            }

        @Get('items')
            getData(){
                return this.resource.getData()
            }


    }

