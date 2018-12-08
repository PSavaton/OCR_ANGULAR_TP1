import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLoveIts: number;
	@Input() postCreated_at: Date;

	constructor() { }

	ngOnInit() { }

	onSwitchLove() {
		this.postLoveIts = this.postLoveIts + 1;
	}	
	
	onSwitchDislike() {
		this.postLoveIts = this.postLoveIts - 1;
	}
}