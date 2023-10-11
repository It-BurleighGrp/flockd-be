import { Controller, Post, Get, Delete, Put, Body } from '@nestjs/common';
import {StockService} from './stock.service'
import {Stock} from '../types'
import {ApiResponse, ApiOperation, ApiTags, ApiProperty} from '@nestjs/swagger'

@ApiTags('Stock')
@Controller('stock')

export class StockController {
    constructor(private stock: StockService){}

    @ApiOperation({summary: 'Create new stock instance'})
    @ApiResponse({status: 201, description: ''})
    @ApiResponse({status: 400, description: ''})
    @Post('create')
        createStockResource(@Body() dto:Stock){
            return this.stock.createStockResource(dto)
        }
    @Get()
        getStockResource(){
            return this.stock.getStockResource()
        }
    @Put('updateResource')
        updateStockResource(@Body() dto:Stock){
            return this.stock.updateStockResource()
        }
    @Delete('create')
        deleteStockResource(id:string){
            return this.stock.deleteStockResource(id)
        }
}
