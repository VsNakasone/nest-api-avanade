import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUsertDTO } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    //criar
    @Post()
    create(@Body() req:CreateUserDTO){
        return this.usersService.create(req);
    }
    //listar todos
    @Get()
    findAll() {
        return this.usersService.findAll();
    }
    //listar um localhost:3000/users/1
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }
    //atualizar
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() req: UpdateUsertDTO) {
            return this.usersService.update(id, req);
        }
    
    //deletar
    @Delete('id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id);
    }
}
