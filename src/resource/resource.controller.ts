import { Body, Post, Get, Controller } from "@nestjs/common";
import {ResourceDto} from '../types'
import { ResourceService } from "./resource.service";

@Controller()
    export class ResourceController{
        constructor(private resource: ResourceService){}
        @Post('send')
            sendData(@Body() dto:ResourceDto){
                return this.resource.sendData(dto)
            }
    }

