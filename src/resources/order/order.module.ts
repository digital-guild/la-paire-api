import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/commons/services/prisma.service';
import { CmbWhatsappService } from 'src/commons/services/cmb-whatsapp.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    PrismaService,
    CmbWhatsappService
  ],
})
export class OrderModule {}
