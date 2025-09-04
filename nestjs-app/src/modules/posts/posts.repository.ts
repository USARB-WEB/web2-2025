import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsRepository {
    private posts: CreatePostDto[] = [
        { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
        { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
        { id: 3, title: 'Third Post', content: 'This is the content of the third post.' },
    ];

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
    updatePost(id: string, updatePostDto: CreatePostDto) {
        const postIndex = this.posts.findIndex(post => post.id === parseInt(id));
        if (postIndex === -1) {
            return null;
        }
        this.posts[postIndex] = updatePostDto;
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
