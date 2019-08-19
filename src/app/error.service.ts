import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  error: string = null;

  showError(message:string) {
    this.error = message;
    setTimeout(() => this.error=null, 5000);
  }
  close() {
    this.error = null;
  }
}
