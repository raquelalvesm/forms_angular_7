import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class User {
  id: number;
  name:string;
  username: string;

  email: string;
  access_token?:string;
 }
