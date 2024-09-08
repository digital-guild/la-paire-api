import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/commons/services/prisma.service';
import { SlugifyService } from 'src/commons/services/slugify.service';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {

  constructor(
    private readonly prismaService: PrismaService,
    private readonly slugifyService: SlugifyService
  ) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(): Promise<ProductEntity[]> {
    return this.prismaService.products.findMany({
      where: {
        deleted_at: null
      },
      include: {
        product_medias: {
          orderBy: [
            { path: 'asc' }
          ]
        },
        product_variants: true
      }
    });
  }

  async getRandomOnes(): Promise<ProductEntity[]> {
    const NB_PRODUCTS = 5; // A Optimiser

    const productsCount = await this.prismaService.products.count();

    const skip = Math.floor(Math.random() * productsCount);

    Logger.log(`Skip: ${skip} / Products Count: ${productsCount} / NB_PRODUCTS: ${NB_PRODUCTS}`);

    return this.prismaService.products.findMany({
      where: {
        deleted_at: null
      },
      include: {
        product_medias: {
          orderBy: [
            { path: 'asc' }
          ]
        },
        product_variants: true
      },
      take: NB_PRODUCTS,
      orderBy: [
        {
          id: 'desc'
        }
      ]
    });
  }

  async getMostPopular(): Promise<ProductEntity[]> {
    const NB_PRODUCTS = 8; // A Optimiser

    return this.prismaService.products.findMany({
      where: {
        deleted_at: null
      },
      include: {
        product_medias: {
          orderBy: [
            { path: 'asc' }
          ]
        },
        product_variants: true,
      },
      orderBy: [
        {
          id: 'desc'
        }
      ],
      take: NB_PRODUCTS
    });
  }

  async getBestRatings(): Promise<ProductEntity[]> {
    // A Optimiser
    const NB_PRODUCTS = 4;

    const products = await this.findAll();

    const ratioProducts = products.map(product => {

      return {
        product,
        ratio: product.comments > 0 ? product.stars / product.comments : 0
      }
    });

    ratioProducts.sort((a, b) => {
      return b.ratio - a.ratio;
    });

    return ratioProducts.slice(0, NB_PRODUCTS).map(item => item.product);
  }

  findOneBySlug(slug: string) {
    return this.prismaService.products.findUnique({
      where: {
        slug,
      },
      include: {
        product_medias: {
          orderBy: [
            { path: 'asc' }
          ]
        },
        product_variants: true
      }
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
