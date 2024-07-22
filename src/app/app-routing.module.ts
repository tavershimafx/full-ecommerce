import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login/login.component';
import { RegisterPageComponent } from './pages/register/register.component';
import { WishListPageComponent } from './pages/wishlist/wishlist.component';
import { CartPageComponent } from './pages/cart/cart.component';
import { CheckoutPageComponent } from './pages/checkout/checkout.component';
import { AccountPageComponent } from './pages/account/account.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { NotFoundPageComponent } from './pages/404/404.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: "", component: HomePageComponent},
  { path: "login", component: LoginPageComponent},
  { path: "register", component: RegisterPageComponent},
  { path: "wishlist", component: WishListPageComponent},
  { path: "cart", component: CartPageComponent},
  { path: "checkout", component: CheckoutPageComponent},
  { path: "account", component: AccountPageComponent},
  { path: "contact", component: ContactPageComponent},
  { path: "404", component: NotFoundPageComponent},
  { path: "product-detail", component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
