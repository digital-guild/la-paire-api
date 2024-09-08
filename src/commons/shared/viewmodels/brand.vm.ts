import { ApiResponseProperty } from "@nestjs/swagger";
import { AuditVm } from "./audit.vm";
import { BrandEntity } from "src/resources/brand/entities/brand.entity";

export class BrandVm extends AuditVm {
    @ApiResponseProperty()
    name: string;

    @ApiResponseProperty()
    logo?: string;

    @ApiResponseProperty()
    slug?: string;

    constructor(data: BrandEntity) {
        super(data);
        this.name = data.name;
        this.logo = data.logo;
        this.slug = data.slug;
    }
}