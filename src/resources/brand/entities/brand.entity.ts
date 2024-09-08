import { AuditEntity } from "src/commons/shared/entities/audit.entity";

export class BrandEntity extends AuditEntity {
    name: string;
    slug?: string;
    logo?: string;
}