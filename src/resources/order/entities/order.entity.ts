import { AuditEntity } from "src/commons/shared/entities/audit.entity";
import { OrderedProductEntity } from "./ordered-product.entity";

export class OrderEntity extends AuditEntity {
    fullname: string;
    email?: string;
    contact: string;
    delivery_place: string;
    subtotal: number;
    fee: number;
    total: number;
    ordered_products: OrderedProductEntity[];
}
