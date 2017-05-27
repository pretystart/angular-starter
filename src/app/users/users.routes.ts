import { UsersComponent } from './users.component';
import { LoginComponent } from './login.component';

export const routes = [
  { path: '', children: [
    { path: '', component: UsersComponent },
    // { path: 'login', loadChildren: './logincomponent' }
    { path: 'login', component: LoginComponent },
  ]},
];
