import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post.model';
import { PostService } from 'src/app/services/PostService';

@Component({
  selector: 'app-post-principal',
  templateUrl: './post-principal.component.html',
  styleUrls: ['./post-principal.component.css']

})
export class PostPrincipalComponent implements OnInit {
  post: Post = new Post();


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.post = this.postService.buscarPostPrincipal();

  }

}
