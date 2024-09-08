import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { BRANDS } from '../constants/brands';
import { SlugifyService } from './slugify.service';

@Injectable()
export class BootstrapService implements OnApplicationBootstrap {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly slugifyService: SlugifyService
  ) { }

  async onApplicationBootstrap() {
    await this.generateBrands();
  }

  async generateBrands() {
    Logger.log('Checking if brands exist in the database...');

    const existingBrandsCount = await this.prismaService.brands.count();

    if (existingBrandsCount > 0) {
      Logger.log('Brands already exist in the database.');
      return;
    }

    for (const brand of BRANDS) {
      const createdBrand = await this.prismaService.brands.create({
        data: {
          name: brand.name,
          logo: brand.logo,
          slug: this.slugifyService.slugify(brand.name),
        }
      });

      const products = brand.products;

      for (const product of products) {
          await this.prismaService.products.create({
            data: {
              name: product.name,
              price: product.price,
              brand_id: createdBrand.id,
              stars: 0,
              comments: 0,
              description: product.description,
              slug: this.slugifyService.slugify(product.name),
              product_medias: {
                create: product.medias
              },
              product_variants: {
                create: product.variants.map(variant => {
                  return {
                    size: variant,
                  };
                })
              }
            }
          });
      }
    }

    Logger.log(`${BRANDS.length} brands have been created.`);
  }
}
