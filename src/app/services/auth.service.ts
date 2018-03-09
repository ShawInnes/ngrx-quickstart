import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    let id = localStorage.getItem('id_token');
    return id !== null;
  }
}
