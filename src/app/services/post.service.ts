import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';

export class PostService {

	lastID: number = 1;
	postsSubject = new Subject<Post[]>();
	private posts: Post[] = [];
	
	constructor() {
/*
*		Trois posts à "liker" par défaut
*/
		const postObj1 = new Post( this.lastID, 'Mon premier post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur venenatis ex eu commodo.');
		this.lastID++;
		postObj1.loveIts = 2;
		this.posts.push( postObj1 );
		
		const postObj2 = new Post( this.lastID, 'Mon deuxieme post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur commodo venenatis ex eu commodo.');
		this.lastID++;
		postObj2.loveIts = -1;
		this.posts.push( postObj2 );		
		
		const postObj3 = new Post( this.lastID,  'Encore un post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus enim, at euismod nunc aliquam eu.');
		this.lastID++;
		this.posts.push( postObj3 );				
	}
	
	emitPostSubject() {
		this.postsSubject.next( this.posts.slice());
	}
		
	addPost (title: string, content: string) {
		const postObj = new Post( this.lastID, title, content);
		this.lastID++;
		this.posts.push( postObj );
		this.emitPostSubject();
	}
	
	delPost (id: number) {
		const index: number = this.posts.findIndex( (s: Post) => { return s.id === id; });
		
			if ( index !== -1 ){
				this.posts.splice(index, 1);
				this.emitPostSubject();
			}
	}
	
	incrementPost (id: number) {
		const index: number = this.posts.findIndex( (s: Post) => { return s.id === id; });
		
			if ( index !== -1 ){
				this.posts[index].loveIts++;
				this.emitPostSubject();
			}		
	}

	decrementPost (id: number) {
		const index: number = this.posts.findIndex( (s: Post) => { return s.id === id; });
		
			if ( index !== -1 ){
				this.posts[index].loveIts--;
				this.emitPostSubject();
			}		
	}}