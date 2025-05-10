import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../types';
import { URL_API } from '../../../constants';
import { switchMap } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-detail',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './posts-detail.component.html',
  styleUrl: './posts-detail.component.css',
})
export class PostsDetailComponent {
  post$ = inject(HttpClient)
    .get<Post>(
      `${URL_API}/post/${inject(ActivatedRoute).snapshot.paramMap.get('id')}`
    )
    .pipe(switchMap(async (post) => post));
}
