import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/commons/services/prisma.service';
import { SlugifyService } from 'src/commons/services/slugify.service';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    SlugifyService
  ],
})
export class ProductModule {}
