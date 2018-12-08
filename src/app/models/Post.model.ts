export class Post {
	created_at = new Date();
	
	constructor ( public title: string,
				public content: string,
				public loveIts: number) {
	}
}