import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { AuthenticationService } from './users.AuthenticationService';
import { LoginComponent } from './login.component';

// import { Title } from './title';
// import { XLargeDirective } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'users',  // <users></users>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    AuthenticationService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './users.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public userToken = '';

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public authenticationService: AuthenticationService,
    // public loginComponent: LoginComponent,
  ) {}

  public ngOnInit() {
    console.log('hello `Users` component');
    this.userToken = this.authenticationService.getUserToken();
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
