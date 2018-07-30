import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  get logged() {
    return sessionStorage.getItem('logged') === 'true';
  }

  set logged(value: boolean) {
    sessionStorage.setItem('logged', '' + value);
  }

  constructor() { }

}
