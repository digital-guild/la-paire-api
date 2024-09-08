import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BootstrapService } from './commons/services/bootstrap.service';
import { PrismaService } from './commons/services/prisma.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './commons/interceptors/response.interceptor';
import { BrandModule } from './resources/brand/brand.module';
import { ProductModule } from './resources/product/product.module';
import { SlugifyService } from './commons/services/slugify.service';
import { OrderModule } from './resources/order/order.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    // Resource Modules
    BrandModule,
    ProductModule,
    OrderModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    BootstrapService,
    PrismaService,
    SlugifyService
  ],
  exports: [
    BootstrapService,
    PrismaService,
    SlugifyService
  ],
})
export class AppModule {}
