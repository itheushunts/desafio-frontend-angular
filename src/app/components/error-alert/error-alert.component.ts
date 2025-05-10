import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  imports: [],
  templateUrl: './error-alert.component.html',
  styleUrl: './error-alert.component.css',
})
export class ErrorAlertComponent {
  @Input() error: HttpErrorResponse | null = null;

  viewError() {
    if (Array.isArray(this.error?.error)) {
      return this.error?.error;
    }
    return [this.error?.error];
  }
}
