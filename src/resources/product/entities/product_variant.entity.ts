import { AuditEntity } from "src/commons/shared/entities/audit.entity";
import { ProductEntity } from "./product.entity";

export class ProductVariantEntity extends AuditEntity {
    size: number;
    product?: ProductEntity;
}
