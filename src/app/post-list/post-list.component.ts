import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

	posts: Post[];
	postSubscription: Subscription;
  
	constructor(private postService: PostService ) { }

	ngOnInit() {
		this.postSubscription = this.postService.postsSubject.subscribe(
										(posts: Post[]) => { this.posts = posts; 
															} );
		this.postService.emitPostSubject();
	}

	ngOnDestroy() {
		this.postSubscription.unsubscribe();
	}
	
	onNewPost() {
		console.log('Créer un nouveau post');
		this.postService.addPost( 'Nouveau post', 'Nouveau contenu');
		this.postService.emitPostSubject();	
	}
}
