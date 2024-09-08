import { ApiResponseProperty } from "@nestjs/swagger";
import { AuditVm } from "./audit.vm";
import { ProductEntity } from "src/resources/product/entities/product.entity";
import { ProductMediaVm } from "./product_media.vm";
import { ProductVariantVm } from "./product_variant.vm";

export class ProductVm extends AuditVm {
    @ApiResponseProperty()
    name: string;

    @ApiResponseProperty()
    slug: string;

    @ApiResponseProperty()
    price: number;

    @ApiResponseProperty()
    stars: number;

    @ApiResponseProperty()
    comments: number;

    @ApiResponseProperty()
    description: string;

    //main_media?: ProductMediaVm;

    @ApiResponseProperty({ type: [ProductMediaVm] })
    medias: ProductMediaVm[];

    @ApiResponseProperty({ type: [ProductVariantVm] })
    variants: ProductVariantVm[];

    constructor(data: ProductEntity) {
        super(data);
        this.name = data.name;
        this.slug = data.slug;
        this.price = data.price;
        this.stars = data.stars;
        this.comments = data.comments;
        this.description = data.description;
        this.medias = data.product_medias ? data.product_medias.map(media => new ProductMediaVm(media)) : [];
        this.variants = data.product_variants ? data.product_variants.map(variant => new ProductVariantVm(variant)) : [];
        //this.main_media = this.medias.length > 0 ? this.medias[0] : null;
    }
}