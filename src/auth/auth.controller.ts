import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
//REST API trabalha c/ ações, são get p/ todos.post p/ cadastro. put/patch p/ alteração. delete p/ exclusão
//o GET sempre vem 2 vezes, uma p/ listar todo mundo e a outra um apenas, se tudo der certo o retorno é sempre 200
    @Post('login') //@Post sempre retorna 201
    async authLogin(@Body() req){
        const { login, password } = req;
        console.log("Login: ", login);
        console.log("Senha: ", password);
        if(!login){
            throw new HttpException('Login não informado!', HttpStatus.BAD_REQUEST);
        }
        return this.authService.authLogin(login, password);
    }
}
