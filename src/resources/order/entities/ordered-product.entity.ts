import { AuditEntity } from "src/commons/shared/entities/audit.entity";
import { ProductEntity } from "src/resources/product/entities/product.entity";

export class OrderedProductEntity extends AuditEntity {
    quantity: number;
    product?: ProductEntity;
}
