import { IsEmail, IsOptional, IsString, ValidateNested } from "class-validator";
import { OrderedProductDto } from "./ordered-product.dto";
import { Type } from "class-transformer";

export class CreateOrderDto {
    
    @IsString()
    fullname: string;

    @IsString()
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    contact: string;

    @IsString()
    delivery_place: string;

    @ValidateNested({ each: true })
    @Type(() => OrderedProductDto)
    ordered_products: OrderedProductDto[];
}
