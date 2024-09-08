import { ApiResponseProperty } from "@nestjs/swagger";

export class AuditVm {
    @ApiResponseProperty()
    id: string;

    @ApiResponseProperty()
    created_at: Date;

    @ApiResponseProperty()
    updated_at: Date;

    @ApiResponseProperty()
    deleted_at: Date;

    constructor(data: any) {
        this.id = data.id;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.deleted_at = data.deleted_at;
    }
}