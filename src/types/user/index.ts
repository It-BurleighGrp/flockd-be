import {IsNotEmpty, IsString} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger' 

export class User {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    birthDate: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    password: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    email: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    phone: string
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    role: string
    
    @IsString()
    @ApiProperty()
    photo: string
}