<<<<<<< HEAD

=======
>>>>>>> develop
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeES from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { CategoriesComponent } from './features/categories/categories.component';
import { HabitualesComponent } from './features/habituales/habituales.component';
<<<<<<< HEAD
import { AuthenticationComponent } from './features/authentication/authentication.component';
=======
import { HomeComponent } from './features/home/home.component';
import { ProductModule } from './features/product/product.module';
import { UserModule } from './features/user/user.module';
import { SharedModule } from './shared/shared.module';
>>>>>>> develop

registerLocaleData(localeES, 'es-ES', localeEsExtra);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    HabitualesComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    SharedModule,
    AuthenticationModule,
    ProductModule,
    UserModule,

    MatDividerModule,
<<<<<<< HEAD

=======
    UserModule,
>>>>>>> develop
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
