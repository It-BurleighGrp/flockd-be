import {IsNotEmpty, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class Resource {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    model: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    type: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    serial: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    photo: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    responsible: string
    
    @IsString()
    @ApiProperty()
    others: string
    
    @IsString()
    @ApiProperty()
    status: string
    
    @IsString()
    @ApiProperty()
    localization: string
    
    @IsString()
    @ApiProperty()
    price: string
    
}
