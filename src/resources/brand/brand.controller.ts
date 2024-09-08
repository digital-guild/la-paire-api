import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { BrandService } from './brand.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BrandVm } from 'src/commons/shared/viewmodels/brand.vm';
import { CreateBrandDto } from './dtos/create-brand.dto';
import { UpdateBrandDto } from './dtos/update-brand.dto';

@ApiTags('Brands')
@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  @ApiOperation({ summary: 'Get all brands' })
  @ApiResponse({ status: 200, type: BrandVm, isArray: true })
  async findAll() {
    const items = await this.brandService.findAll();

    return items.map((item) => new BrandVm(item));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a brand by id' })
  @ApiResponse({ status: 200, type: BrandVm })
  async findOne(@Param('id') id: string) {
    const item = await this.brandService.findOne(id);

    if (!item) {
      throw new HttpException("La marque n'existe pas", HttpStatus.NOT_FOUND);
    }

    return new BrandVm(item);
  }

  @Post()
  @ApiOperation({ summary: 'Create a brand' })
  @ApiResponse({ status: 201, type: BrandVm })
  async create(
    @Body() dto: CreateBrandDto
  ) {
    const item = await this.brandService.create(dto);

    return new BrandVm(item);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a brand' })
  @ApiResponse({ status: 200, type: BrandVm })
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateBrandDto
  ) {
    const item = await this.brandService.update(id, dto);

    return new BrandVm(item);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a brand' })
  @ApiResponse({ status: 200, type: BrandVm })
  async delete(@Param('id') id: string) {
    const item = await this.brandService.delete(id);

    return new BrandVm(item);
  }
}
