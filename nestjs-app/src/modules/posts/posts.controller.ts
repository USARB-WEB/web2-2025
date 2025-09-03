import { Controller, Get, Post, Param, Put, Delete, Patch } from "@nestjs/common";

@Controller('posts')
export class PostsController {
    posts: any;

    constructor() {
        this.posts = [
            { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
            { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
            { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
        ];
    }

    @Get()
    getAllPosts() {
        return this.posts;
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.posts.find(post => post.id === parseInt(id));
    }

    @Post('')
    createPost() {
        return this.posts.push({ id: this.posts.length + 1, title: 'New Post', content: 'This is a new post.' });
    }

    @Put(':id')
    updatePost(@Param('id') id: string) {
        this.posts.splice(parseInt(id) - 1, 1, { id: parseInt(id), title: 'Updated Post', content: 'This post has been updated.' })
        return this.posts.find(post => post.id === parseInt(id));
    }

    @Patch(':id')
    partiallyUpdatePost(@Param('id') id: string) {
        this.posts.splice(parseInt(id) - 1, 1, { id: parseInt(id), title: 'Updated Post', content: 'This post has been updated.' })
        return this.posts.find(post => post.id === parseInt(id));
    }

    @Delete(':id')
    deletePost(@Param('id') id: string) {
        this.posts.splice(this.posts.findIndex(post => post.id === parseInt(id)), 1);
        return {};
    }
}