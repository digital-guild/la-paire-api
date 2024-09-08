import { AuditEntity } from "src/commons/shared/entities/audit.entity";
import { ProductMediaEntity } from "./product_media.entity";
import { ProductVariantEntity } from "./product_variant.entity";

export class ProductEntity extends AuditEntity {
    name: string;
    slug: string;
    price: number;
    stars: number;
    comments: number;
    description: string;
    product_medias?: ProductMediaEntity[];
    product_variants?: ProductVariantEntity[];
}
