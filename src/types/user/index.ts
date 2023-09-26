import {IsNotEmpty, IsString} from 'class-validator'


export class User {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    birthDate: string
    
    @IsString()
    @IsNotEmpty()
    password: string
    
    @IsString()
    @IsNotEmpty()
    email: string
    
    @IsString()
    @IsNotEmpty()
    phone: string
    
    @IsString()
    @IsNotEmpty()
    role: string
    
    @IsString()
    photo: string


}