import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsService {
    posts: any;

    constructor() {
        this.posts = [
            { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
            { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
            { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
        ];
    }

    getAllPosts() {
        return this.posts;
    }

    getPostById(id: string) {
        if(!this.posts.find(post => post.id === parseInt(id))) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND)
        }
        return this.posts.find(post => post.id === parseInt(id));
    }

    createPost(createPostDto: CreatePostDto) {
        return this.posts.push({ 
            id: this.posts.length + 1, 
            title: createPostDto.title, 
            content: createPostDto.content
        });
    }

    updatePost(id: string) {
        this.getPostById(id)
        this.posts.splice(parseInt(id) - 1, 1, { id: parseInt(id), title: 'Updated Post', content: 'This post has been updated.' })
        return this.posts.find(post => post.id === parseInt(id));
    }

    partiallyUpdatePost(id: string) {
        this.getPostById(id);
        this.posts.splice(parseInt(id) - 1, 1, { id: parseInt(id), title: 'Updated Post', content: 'This post has been updated.' })
        return this.posts.find(post => post.id === parseInt(id));
    }

    deletePost(id: string) {
        this.getPostById(id)  
        this.posts.splice(this.posts.findIndex(post => post.id === parseInt(id)), 1);
        return {};
    }
}