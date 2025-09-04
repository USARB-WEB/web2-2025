import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./post.entity";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostsRepository {
    private posts: Post[];

    constructor() {
        this.initializePosts();
    }

    private initializePosts() {
        this.posts = [
            { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
            { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
        ];
    }

    getAllPosts() {
        return this.posts;
    }

    getPostById(id: string) {
        return this.posts.find(post => post.id === parseInt(id));
    }

    createPost(title: string, content: string) {
        const newPost = {
            id: this.posts.length + 1,
            title,
            content
        };
        this.posts.push(newPost);
        return newPost;
    }
    updatePost(id: string, updatePostDto: UpdatePostDto) {
        const postIndex = this.posts.findIndex(post => post.id === parseInt(id));
        if (postIndex === -1) {
            return null;
        }
        const updatedPost = { ...this.posts[postIndex], ...updatePostDto };
        this.posts[postIndex] = updatedPost;
        return this.posts[postIndex];
    }
    deletePost(id: string) {
        const postIndex = this.posts.findIndex(post => post.id === parseInt(id));
        if (postIndex === -1) {
            return null;
        }
        const deletedPost = this.posts.splice(postIndex, 1);
        return deletedPost[0];
    }
}
