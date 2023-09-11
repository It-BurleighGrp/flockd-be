import {IsNotEmpty, IsString} from 'class-validator'


export class ResourceDto {
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
    qrCode: string
    
    @IsString()
    @IsNotEmpty()
    responsible: string
    
    @IsString()
    localization: string
 
    @IsString()
    price: string
}
