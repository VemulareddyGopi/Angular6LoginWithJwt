import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  returnUrl: string;
  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = '/';
  }

  model: any = {};
 
  onSubmit() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.loading = false;
            });
  }
 

}
