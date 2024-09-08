import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { PrismaService } from 'src/commons/services/prisma.service';
import { SlugifyService } from 'src/commons/services/slugify.service';

@Module({
  controllers: [BrandController],
  providers: [
    BrandService,
    PrismaService,
    SlugifyService
  ],
})
export class BrandModule {}
