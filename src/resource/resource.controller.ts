import { Body, Post, Get, Controller, Put, Param, Delete, Query } from "@nestjs/common";
import {Resource} from '../types'
import { ResourceService } from "./resource.service";


@Controller()
    export class ResourceController{
        constructor(private resource: ResourceService){}
        @Post('resource/create')
            createResource(@Body() dto: Resource){
                return this.resource.createResource(dto)
            }

        @Get('resource/items')
            getResource(){
                return this.resource.getResource()
            }

        @Get('resource/')
            getResourceById(@Query('id') id: string): Promise<Resource>{
                return this.resource.getResourceById(id)
            }
        
        @Put('resource/:id')
            updateResource(@Param('id') id: string, @Body() dto: Resource){
                return this.updateResource(id, dto)
            }
        
        @Delete('resource/delete')
            deleteResource(id:string){
                return this.deleteResource(id)
            }

    }

