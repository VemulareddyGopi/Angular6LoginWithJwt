import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,canActivate: [AuthGuard]
  },
  {
    path: "login",
    loadChildren: "../app/login/login.module#LoginModule"
  },
  {
    path: "signup",
    loadChildren: "../app/sign-up/sign-up.module#SignUpModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
