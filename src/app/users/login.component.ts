import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService } from './users.AuthenticationService';
import { User } from './users.user';
// import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'login-form',
    providers: [
        AuthenticationService
    ],
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private _service: AuthenticationService,
        private router: Router
        // private _user: User
    ) {}

    public ngOnInit() {
        console.log('hello `login` component');
    }

    public login() {
        if (!this._service.login(event, this.user.email, this.user.password)) {
            this.errorMsg = 'Failed to login';
        }
        else{
            this.router.navigate(['/']);
        }
    }
}
