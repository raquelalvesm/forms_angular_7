import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../models/user/user.module';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


users: User[] = [];

constructor(private userService: UserService) { }

ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(user => {
        this.users = user;
        console.log(this.users);
        
    });
}
}