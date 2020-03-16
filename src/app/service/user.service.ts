import { Injectable } from '@angular/core';
import { config } from 'process';
import { User } from '../models/user/user.module';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`${environment.apiUrl}/user`);

    
}

}
