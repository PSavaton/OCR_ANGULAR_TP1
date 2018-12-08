import { Component } from '@angular/core';
import { Post } from './models/Post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

// Trois posts à "liker"
//	
	refPosts = [
		new Post( 'Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur venenatis ex eu commodo.', 2),
		new Post( 'Mon deuxieme post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur commodo venenatis ex eu commodo.', -1),
		new Post( 'Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus enim, at euismod nunc aliquam eu.', 0),
	];
	
}
