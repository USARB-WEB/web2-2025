import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: 'Post Title', description: 'The title of the post'})
    @IsString()
    title: string;

    @ApiProperty({example: 'This is the content of the post.', description: 'The content of the post'})
    content: string;
}