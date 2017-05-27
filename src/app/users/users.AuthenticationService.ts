import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
// import { User } from './users.user';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');

@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router,
    private http: Http) { }

  public logout() {
    localStorage.removeItem('id_token');
    this._router.navigate(['login']);
  }

  // public login(event, username, password) {
  //   event.preventDefault();
  //   let body = JSON.stringify({ username, password });
  //   this.http.post('http://localhost:3000/users/login', body, { headers: contentHeaders })
  //     .subscribe(
  //       (response) => {
  //         localStorage.setItem('id_token', response.json().id_token);
  //         this._router.navigate(['home']);
  //       },
  //       (error) => {
  //         alert(error.text());
  //         console.log(error.text());
  //       }
  //     );
  // }
  public login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    localStorage.setItem('id_token', username);
    return true;
  }
  public checkCredentials() {
    if (localStorage.getItem('id_token') === null) {
      this._router.navigate(['login']);
    }
  }

  public getUserToken() {
    if (localStorage.getItem('id_token') === null) {
      console.log('please login');
      this._router.navigate(['/users/login']);
    } else {
      return localStorage.getItem('id_token');
    }
  }
}
