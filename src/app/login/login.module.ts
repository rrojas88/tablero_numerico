import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { BoardComponent } from './components/board/board.component';



@NgModule({
  declarations: [
    LoginComponent,
    BoardComponent
  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
