import { ApiResponseProperty } from "@nestjs/swagger";
import { AuditVm } from "./audit.vm";
import { ProductVariantEntity } from "src/resources/product/entities/product_variant.entity";

export class ProductVariantVm extends AuditVm {
    @ApiResponseProperty()
    size: number;

    constructor(data: ProductVariantEntity) {
        super(data);
        this.size = data.size;
    }
}