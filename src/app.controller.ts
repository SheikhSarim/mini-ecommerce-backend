import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('App health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  healthChecker(): { status: string } {
    return this.appService.healthChecker();
  }

  @Get('terms')
  @ApiExcludeEndpoint()
  @Header('Content-Type', 'text/plain')
  getTerms(): string {
    return this.appService.getTermsOfService();
  }
}
