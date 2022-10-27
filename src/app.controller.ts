import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    //está apenas redirecioando o usuário p/ o serviço correto
    return this.appService.getHello();
  }
 
}

/* https://avanade-manha.eastus2.cloudapp.azure.com

http://20.122.118.196
 */