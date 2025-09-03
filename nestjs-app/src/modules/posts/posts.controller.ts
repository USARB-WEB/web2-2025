import { Controller, Get, Post, Param, Put, Delete, Patch } from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController {
    
    constructor(private postsService: PostsService){

    }
    
    @Get()
    getAllPosts() {
        return this.postsService.getAllPosts();
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.postsService.getPostById(id)
    }

    @Post('')
    createPost() {
        return this.postsService.createPost()
    }

    @Put(':id')
    updatePost(@Param('id') id: string) {
        return this.postsService.updatePost(id)
    }

    @Patch(':id')
    partiallyUpdatePost(@Param('id') id: string) {
        return this.postsService.partiallyUpdatePost(id)
    }

    @Delete(':id')
    deletePost(@Param('id') id: string) {
        return this.postsService.deletePost(id);
    }
}