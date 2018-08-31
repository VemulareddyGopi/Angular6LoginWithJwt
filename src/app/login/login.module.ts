import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from "./routes";
import { AuthenticationService } from './authentication.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,FormsModule
  ],
    providers: [
        AuthenticationService
    ],
  declarations: [LoginComponent]
})
export class LoginModule { }
