import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostsRepository } from "./posts.repository";

@Injectable()
export class PostsService {
    constructor(private postsRepository: PostsRepository) {}

    getAllPosts() {
        return this.postsRepository.getAllPosts();
    }

    getPostById(id: string) {
        const post = this.postsRepository.getPostById(id);
        if (!post) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
        return post;
    }

    createPost(createPostDto: CreatePostDto) {
        return this.postsRepository.createPost(createPostDto.title, createPostDto.content);
    }

    updatePost(id: string, updatePostDto: CreatePostDto) {
        const post = this.getPostById(id);
        if (!post) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
        return this.postsRepository.updatePost(id, updatePostDto);
    }

    partiallyUpdatePost(id: string, updatePostDto: CreatePostDto) {
        const post = this.getPostById(id);
        if (!post) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
        return this.postsRepository.updatePost(id, updatePostDto);
    }

    deletePost(id: string) {
        this.getPostById(id);
        return this.postsRepository.deletePost(id);
    }
}