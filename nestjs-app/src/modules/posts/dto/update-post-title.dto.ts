import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdatePostTitleDto {
    
    @ApiProperty({example: 'Post Title', description: 'The title of the post'})
    @IsString()
    title: string;
}