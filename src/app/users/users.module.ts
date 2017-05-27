import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './users.routes';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    UsersComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class UsersModule {
  public static routes = routes;
}
