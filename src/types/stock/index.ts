import {IsNotEmpty, IsString, IsNumber} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class Stock {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    type: string
    
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    quantity: number  
}
