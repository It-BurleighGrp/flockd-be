import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {TUserAuth} from '../interfaces/auth'

@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService){}
    @Post('signup')
        signup(@Body() dto: TUserAuth){
            console.log('oia aqui>>>', dto)
            return this.auth.signup(dto)
        }

    @Post('signin')
        signin (@Body() dto: TUserAuth){
            return this.auth.signin(dto)
        }
}
