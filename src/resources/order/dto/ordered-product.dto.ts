import { IsNumber, IsString } from "class-validator";

export class OrderedProductDto {
    
    @IsString()
    product_variant_id: string;

    @IsNumber()
    quantity: number;
}
