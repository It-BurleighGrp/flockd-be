import { Body, Post, Get, Controller, Put, Param, Delete, Query } from "@nestjs/common";
import {Resource} from '../types'
import { ResourceService } from "./resource.service";
import {
    ApiResponse,
    ApiOperation,
    ApiTags
  } from '@nestjs/swagger';


  @ApiTags('Resource')
  @Controller('resource')
    export class ResourceController{
        constructor(private resource: ResourceService){}

        @ApiOperation({summary: 'Create new Resource'})
        @ApiResponse({ status:201, description: 'Resource created successfully'})
        @ApiResponse({ status:406, description: 'Not Acceptable'})
        @Post('create')
            createResource(@Body() dto: Resource){
                return this.resource.createResource(dto)
            }

        @ApiOperation({summary: 'Get all resource instances'})
        @ApiResponse({ status:200, description: 'All instances of resources'})
        @ApiResponse({ status:400, description: 'Not Acceptable'})    
        @Get('items')
            getResource(): Promise<Resource[]> {
                return this.resource.getResource()
            }

        @ApiOperation({summary: 'Get one specific resource instance'})
        @ApiResponse({ status:202, description: 'Return specific resource'})
        @ApiResponse({ status:404, description: 'Not Found'})        
        @Get('item')
            getResourceById(@Query('id') id: string): Promise<Resource>{
                return this.resource.getResourceById(id)
            }
        
        @ApiOperation({summary: 'Update one specific resource instance'})
        @ApiResponse({ status:202, description: 'Accepted'})
        @ApiResponse({ status:404, description: 'Not Found'})     
        @Put(':id')
            updateResource(@Param('id') id: string, @Body() dto: Resource){
                return this.resource.updateResource(id, dto)
            }

        @ApiOperation({summary: 'Delete a specific resource instance'})
        @ApiResponse({ status:200, description: 'Resource Deleted'})
        @ApiResponse({ status:404, description: 'Not Found'})   
        @Delete('delete')
            deleteResource(@Query('id') id:string){
                return this.resource.deleteResource(id)
            }
    }

