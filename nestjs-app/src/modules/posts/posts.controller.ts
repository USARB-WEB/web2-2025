import { Controller, Get, Post, Param, Put, Delete, Patch, Body } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostTitleDto } from "./dto/update-post-title.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) { }

    @Get()
    getAllPosts() {
        return this.postsService.getAllPosts();
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.postsService.getPostById(id)
    }

    @Post('')
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postsService.createPost(createPostDto);
    }

    @Put(':id')
    updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.updatePost(id, updatePostDto);
    }

    @Patch(':id')
    partiallyUpdatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
        return this.postsService.partiallyUpdatePost(id, updatePostDto);
    }

    @Patch(':id/update-title')
    updatePostTitle(@Param('id') id: string, @Body() updatePostTitleDto: UpdatePostTitleDto) {
        return this.postsService.updatePostTitle(id, updatePostTitleDto.title);
    }

    @Delete(':id')
    deletePost(@Param('id') id: string) {
        return this.postsService.deletePost(id);
    }
}