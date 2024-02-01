import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
    imports: [],
    controllers: [AppController, CatsController],
    providers: [AppService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule { }
