import { ValidateNested, IsOptional, IsArray, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ColorAttributeDto } from './color-attribute.dto';

export class ProductAttributesDto {
    @ApiPropertyOptional({ type: [ColorAttributeDto] })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => ColorAttributeDto)
    color?: ColorAttributeDto[];
}
