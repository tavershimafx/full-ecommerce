import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login/login.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { WishListPageComponent } from './pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: "", component: HomePageComponent},
  { path: "login", component: LoginPageComponent},
  { path: "register", component: RegisterPageComponent},
  { path: "wishlist", component: WishListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
