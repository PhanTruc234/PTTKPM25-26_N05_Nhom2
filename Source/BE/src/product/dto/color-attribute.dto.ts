import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class ColorAttributeDto {
    @ApiProperty({ example: 'Đỏ' })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: 210000, required: false })
    @IsOptional()
    @IsNumber()
    @Min(0)
    price?: number;

    @ApiProperty({ example: ['M', 'L'], required: false })
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    sizes?: string[];

    @ApiProperty({ example: 'ATN-DO-M', required: false })
    @IsOptional()
    @IsString()
    code?: string;
}
