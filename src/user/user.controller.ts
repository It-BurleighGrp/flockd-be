import { Controller, Get, Post, Put, Delete,  } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private user:UserService){}
    @ApiOperation({summary: 'Create a new user'})
    @ApiResponse({ status:201, description: 'User created successfully'})
    @ApiResponse({ status:406, description: 'Not Acceptable'})
    @Post('create')
    createUser(){
        return this.user.createUser()
    }
    @ApiOperation({summary: 'Get infos of a unique user'})
    @ApiResponse({ status:201, description: 'Resource created successfully'})
    @ApiResponse({ status:406, description: 'Not Acceptable'})
    @Get("/me")
    getUser(){
        return this.user.getUser()
    }
    @ApiOperation({summary: 'Update infos of a user'})
    @ApiResponse({ status:201, description: 'Resource created successfully'})
    @ApiResponse({ status:406, description: 'Not Acceptable'})
    @Put('update')
    updateUser(){
        return this.user.updateUser()
    }

    @ApiOperation({summary: 'Delete user info'})
    @ApiResponse({ status:201, description: 'Resource created successfully'})
    @ApiResponse({ status:406, description: 'Not Acceptable'})
    @Delete('delete')
    deleteUser(){
        return this.user.deleteUser()
    }


}
