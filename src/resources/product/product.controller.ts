import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductVm } from 'src/commons/shared/viewmodels/product.vm';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.', type: ProductVm, isArray: true })
  async findAll() {
    let items = await this.productService.findAll();

    return items.map(item => new ProductVm(item));
  }

  @Get('random')
  @ApiOperation({ summary: 'Get random products' })
  @ApiResponse({ status: 200, description: 'Return random products.', type: ProductVm, isArray: true })
  async getRandomOnes() {
    let items = await this.productService.getRandomOnes();

    return items.map(item => new ProductVm(item));
  }

  @Get('most-popular')
  @ApiOperation({ summary: 'Get most popular products' })
  @ApiResponse({ status: 200, description: 'Return most popular products.', type: ProductVm, isArray: true })
  async getMostPopularOnes() {
    let items = await this.productService.getMostPopular();

    return items.map(item => new ProductVm(item));
  }

  @Get('best-ratings')
  @ApiOperation({ summary: 'Get best ratings products' })
  @ApiResponse({ status: 200, description: 'Return best ratings products.', type: ProductVm, isArray: true })
  async getBestRatingsOnes() {
    let items = await this.productService.getBestRatings();

    return items.map(item => new ProductVm(item));
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get a product by slug' })
  @ApiResponse({ status: 200, description: 'Return a product by slug.', type: ProductVm })
  async findOne(@Param('slug') slug: string) {
    const item = await this.productService.findOneBySlug(slug);

    if (!item) {
      throw new HttpException('Le produit n\'existe pas !', 404);
    }

    return new ProductVm(item);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
