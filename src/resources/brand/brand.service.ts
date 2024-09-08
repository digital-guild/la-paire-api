import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/commons/services/prisma.service';
import { BrandEntity } from './entities/brand.entity';
import { SlugifyService } from 'src/commons/services/slugify.service';
import { CreateBrandDto } from './dtos/create-brand.dto';
import { UpdateBrandDto } from './dtos/update-brand.dto';

@Injectable()
export class BrandService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly slugifyService: SlugifyService
    ) {}

    findAll(): Promise<BrandEntity[]> {
        return this.prismaService.brands.findMany({
            where: { deleted_at: null }
        });
    }

    findOne(id: string): Promise<BrandEntity> {
        return this.prismaService.brands.findUnique({
            where: { id }
        });
    }

    create(dto: CreateBrandDto): Promise<BrandEntity> {
        const slug = this.slugifyService.slugify(dto.name);

        return this.prismaService.brands.create({
            data: {
                name: dto.name,
                slug
            }
        });
    }

    update(id: string, dto: UpdateBrandDto): Promise<BrandEntity> {
        let slug = undefined;

        if (dto.name) {
            slug = this.slugifyService.slugify(dto.name);
        }

        return this.prismaService.brands.update({
            where: { id },
            data: {
                name: dto.name || undefined,
                slug
            }
        });
    }

    delete(id: string): Promise<BrandEntity> {
        return this.prismaService.brands.update({
            where: { id },
            data: {
                deleted_at: new Date()
            }
        });
    }
}
