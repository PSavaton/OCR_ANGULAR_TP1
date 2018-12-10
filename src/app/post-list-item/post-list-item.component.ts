import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

	@Input() post: Post;
	@Input() msgLike: string; 

	constructor(private postService: PostService ) { 
	}

	updateLike() {
		const strLike = 'Like(s): ';
		const strDislike = 'Dislike(s): ';
		var nbLike = Number( this.post.loveIts );
		
		if ( this.post.loveIts > 0 ) {
			this.msgLike = strLike.concat( nbLike.toString() );
			
		} else if ( this.post.loveIts < 0 )	{
			nbLike = nbLike * -1;
			this.msgLike = strDislike.concat( nbLike.toString() );
		
		} else {
			this.msgLike = '';
		}
	}
	
	ngOnInit() {
		this.updateLike();
	}

	onSwitchLove() {
		this.postService.incrementPost( this.post.id );
		this.updateLike();
	}	
	
	onSwitchDislike() {
		this.postService.decrementPost( this.post.id );
		this.updateLike();
	}
	
	onSwitchDelete() {
		this.postService.delPost( this.post.id );
	}
}