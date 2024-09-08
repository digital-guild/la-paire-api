import { HttpException, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderedProductDto } from './dto/ordered-product.dto';
import { PrismaService } from 'src/commons/services/prisma.service';
import { OrderEntity } from './entities/order.entity';
import { CmbWhatsappService } from 'src/commons/services/cmb-whatsapp.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cmbWhatsappService: CmbWhatsappService
  ) {}

  async create(createOrderDto: CreateOrderDto) {
      const { total, fee, subtotal } = await this.calculateOrderPricing(createOrderDto.ordered_products);

      const order = await this.prismaService.orders.create({
        data: {
          fullname: createOrderDto.fullname,
          email: createOrderDto.email,
          contact: createOrderDto.contact,
          delivery_place: createOrderDto.delivery_place,
          subtotal,
          fee,
          total,
          ordered_products: {
            create: createOrderDto.ordered_products.map(orderedProduct => {
              return {
                product_id: orderedProduct.product_variant_id,
                quantity: orderedProduct.quantity
              }
            })
          }
        },
        include: {
          ordered_products: {
            include: {
              product: {
                include: {
                  product: true
                }
              }
            }
          }
        }
      });

      this.notifyOrderCreated({
        ...order,
        ordered_products: order.ordered_products.map(orderedProduct => {
          return {
            ...orderedProduct,
            product: orderedProduct.product.product
          }
        })
      });
  }

  async notifyOrderCreated(order: OrderEntity) {
    const message = `Nouvelle commande de ${order.fullname} (${order.email}) pour un montant de ${order.total} FCFA`;

    this.cmbWhatsappService.sendWhatsappMessage(message);
  }

  async calculateOrderPricing(orderedProducts: OrderedProductDto[]) {
    const FEE = 1000;

    let subtotal = 0;
    let total = 0;
    
    for (const orderedProduct of orderedProducts) {
        let productVariant = await this.prismaService.product_variants.findUnique({
          where: {
            id: orderedProduct.product_variant_id
          },
          include: {
            product: true
          }
        });

        if (!productVariant) {
          throw new HttpException(`Le produit avec l'identifiant ${orderedProduct.product_variant_id} n'existe pas`, 404);
        }

        subtotal += productVariant.product.price * orderedProduct.quantity;
    }

    total = subtotal + FEE;

    return {
      subtotal,
      total,
      fee: FEE
    };
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
