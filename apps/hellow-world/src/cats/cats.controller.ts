import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    public findAll(): string {
        return 'This action returns all cats';
    }

    @Get('orange')
    public findOrange(): string {
        return 'This action returns all cats';
    }

    @Get(':id')
    public findCat(@Param('id') id: number): string {

        return `${id}`;
    }

    @Get(':year/:month/:day')
    public findDairy(@Param() path: { year: number; month: number; day: number; }): string {
        return JSON.stringify(path);
    }

    @Post('dairy')
    public postCatsDairy(@Body() dairyInfo: IDairyInfo): string {

        return JSON.stringify(dairyInfo);
    }
}

export interface IDairyInfo {

    year: number;

    month: number;
    day: number;
    content?: string;
}
