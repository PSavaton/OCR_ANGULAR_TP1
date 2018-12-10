export class Post {
	created_at = new Date();
	loveIts: number = 0; 
	
	constructor ( public id: number, 
				public title: string,
				public content: string) {
	}
}