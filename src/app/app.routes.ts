import { Routes } from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostsCreateComponent } from './posts/posts-create/posts-create.component';
import { PostsDetailComponent } from './posts/posts-detail/posts-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'criar', component: PostsCreateComponent },
  { path: 'detalhes/:id', component: PostsDetailComponent },
];
