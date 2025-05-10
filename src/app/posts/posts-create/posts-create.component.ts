import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { URL_API } from '../../../constants';
import { ErrorAlertComponent } from '../../components/error-alert/error-alert.component';

@Component({
  selector: 'app-posts-create',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ErrorAlertComponent,
  ],
  templateUrl: './posts-create.component.html',
  styleUrl: './posts-create.component.css',
})
export class PostsCreateComponent {
  private readonly httpClient = inject(HttpClient);
  form: FormGroup = inject(FormBuilder).group({
    title: ['', Validators.required],
    image: ['', Validators.required],
    body: ['', Validators.required],
  });

  error: HttpErrorResponse | null = null;

  createPost() {
    if (this.form.invalid) return;
    this.error = null;
    this.httpClient.post(`${URL_API}/post`, this.form.value).subscribe({
      next: () => {
        this.form.reset();
      },
      error: (error) => {
        console.log(error);
        this.error = error;
      },
    });
  }
}
