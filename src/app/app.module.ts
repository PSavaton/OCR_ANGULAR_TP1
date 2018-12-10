import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: PostListComponent },
  { path: 'not-found', component: FourOFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
	FourOFourComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [
	PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
