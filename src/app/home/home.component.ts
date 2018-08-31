import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[] = []

  constructor(private authenticationService: AuthenticationService,
    private router: Router,) { 

  }

  ngOnInit() {
    this.loadAllUsers();
  }
//sorting
private pageCount = 5;
key: string = 'name';
reverse: boolean = false;
sort(key){
  this.key = key;
  this.reverse = !this.reverse;
}
p: number = 1;
  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  private loadAllUsers() {
    this.authenticationService.getAll().pipe(first()).subscribe(users => { 
        this.users = users; 
    });
}
}
