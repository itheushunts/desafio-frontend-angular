import { Component, importProvidersFrom, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Post } from '../../../types';
import { URL_API } from '../../../constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  imports: [CommonModule, AsyncPipe, RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  posts$: Observable<Post[]> = inject(HttpClient)
    .get<Post[]>(`${URL_API}/post`)
    .pipe(
      switchMap(async (posts) => posts.filter((post) => post.image !== null))
    );
  ngOnInit(): void {}
}
