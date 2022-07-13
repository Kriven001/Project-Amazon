import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Sections/header/header.component';
import { FooterComponent } from './Sections/footer/footer.component';
import { LoginComponent } from './Webpages/login/login.component';
import { LogoutComponent } from './Webpages/logout/logout.component';
import { HomepageComponent } from './Webpages/homepage/homepage.component';
import { BannerComponent } from './Sections/banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './Sections/products/products.component';
import { LogoutProductsComponent } from './Webpages/logout-products/logout-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    HomepageComponent,
    BannerComponent,
    ProductsComponent,
    LogoutProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
