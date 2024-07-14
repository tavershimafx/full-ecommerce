import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './shared/components/header/header.component';
import { AppFooterComponent } from './shared/components/footer/footer.component';
import { HomepageSliderComponent } from './shared/components/homepage-slider/homepage-slider.component';
import { ProductWidgetComponent } from './shared/widgets/product-widget/product-widget.component';
import { CategoryWidgetComponent } from './shared/widgets/category-widget/category-widget.component';
import { FlashSalesComponent } from './shared/widgets/flash-sales/flash-sales.component';
import { BannerOneComponent } from './shared/widgets/banner-1/banner-1.component';
import { BannerTwoComponent } from './shared/widgets/banner-2/banner-2.component';

const components = [
  AppHeaderComponent,
  AppFooterComponent,
  HomepageSliderComponent,
  ProductWidgetComponent,
  CategoryWidgetComponent,
  FlashSalesComponent,
  BannerOneComponent,
  BannerTwoComponent
]
@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
