import { ApiResponseProperty } from "@nestjs/swagger";
import { AuditVm } from "./audit.vm";
import { ProductMediaEntity } from "src/resources/product/entities/product_media.entity";

export class ProductMediaVm extends AuditVm {
    @ApiResponseProperty()
    path: string;

    @ApiResponseProperty()
    type: string;

    constructor(data: ProductMediaEntity) {
        super(data);
        this.path = data.path ? `/assets/products/${data.path}` : null;
        this.type = data.type;
    }
}