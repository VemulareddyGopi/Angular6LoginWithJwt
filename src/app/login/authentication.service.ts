import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Token } from './../models';
import { User } from '../models';
@Injectable()
export class AuthenticationService {
    constructor(private http:HttpClient){

    }

    login(username:string,password:string){
        return this.http.post<Token>(environment.apiUrl+"api/User/Login",{Email:username,password:password})
        .pipe(map(token=>{
         if(token){
            localStorage.setItem('currentUser', JSON.stringify(token));
         }
         return token;
        }))
    }
    getAll() {
        return this.http.get<User[]>(environment.apiUrl+"api/User/Login");
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}