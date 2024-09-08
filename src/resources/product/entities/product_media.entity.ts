import { AuditEntity } from "src/commons/shared/entities/audit.entity";
import { ProductEntity } from "./product.entity";

export class ProductMediaEntity extends AuditEntity {
    path: string;
    type: string;
    product?: ProductEntity;
}
