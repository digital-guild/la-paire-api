import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateBrandDto {
    
    @IsString()
    @ApiProperty()
    name: string;
    //logo?: string;
}