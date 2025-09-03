import { Controller, Get, Param } from "@nestjs/common";

@Controller('posts')
export class PostsController {

    @Get()
    getAllPosts() {
        return [
            { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
            { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
        ];
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return { id, title: 'First Post', content: 'This is the content of the first post.' };
    }
}