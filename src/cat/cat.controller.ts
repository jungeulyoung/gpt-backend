import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Get('/explain')
  findAll(): string {
    return 'This action returns all cats';
  }
}
