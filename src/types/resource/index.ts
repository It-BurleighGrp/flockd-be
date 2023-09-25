import {IsNotEmpty, IsString} from 'class-validator'


export class Resource {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    model: string
    
    @IsString()
    @IsNotEmpty()
    type: string
    
    @IsString()
    @IsNotEmpty()
    serial: string
    
    @IsString()
    @IsNotEmpty()
    photo: string

    @IsString()
    @IsNotEmpty()
    responsible: string

    @IsString()
    others: string

    @IsString()
    status: string
    
    @IsString()
    localization: string
 
    @IsString()
    price: string

}
