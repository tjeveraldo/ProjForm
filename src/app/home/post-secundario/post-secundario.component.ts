import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/PostService';

@Component({
  selector: 'app-post-secundario',
  templateUrl: './post-secundario.component.html',
})
export class PostSecundarioComponent implements OnInit {

  posts : Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.buscarTodos();
    console.log(this.posts)
  }

}

