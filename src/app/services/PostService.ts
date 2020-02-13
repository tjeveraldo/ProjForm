import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';


@Injectable()
export class PostService {



  salvar(post:Post){
    const posts = this.buscarTodos();
    posts.push(post);

    window.localStorage.setItem('posts',JSON.stringify(posts))
  }

  buscarTodos(): Post[] {
    return JSON.parse(window.localStorage.getItem('posts')) || [];
  }
  buscarPostPrincipal(){
    const posts = this.buscarTodos();

    return posts[0]
  }

  constructor() {

  }
}
