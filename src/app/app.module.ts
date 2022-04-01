import { UserModule } from './features/user/user.module';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeES from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { MostrarContrasenaDirective } from './directives/mostrar-contrasena.directive';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { ProductModule } from './features/product/product.module';
import { HomeComponent } from './features/home/home.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { HabitualesComponent } from './features/habituales/habituales.component';
import { BannerComponent } from './shared/components/banner/banner.component';

registerLocaleData(localeES, 'es-ES', localeEsExtra);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    HabitualesComponent,
    UserFormComponent,
    LoginComponent,
    MostrarContrasenaDirective,
    HoverHighlightDirective
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    ProductModule,
    MatDividerModule,
    UserModule,
    MatSidenavModule
  ],

  providers: [
    MatDividerModule,
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
