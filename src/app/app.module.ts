import { registerLocaleData } from '@angular/common';
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
import { ArticuloComponent } from './articulo/articulo.component';
import { HomeComponent } from './core/home/home.component';
import { ProductModule } from './core/product/product.module';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { MostrarContrasenaDirective } from './directives/mostrar-contrasena.directive';
import { LoginComponent } from './login/login.component';
import { SideBarServiceService } from './services/sideBarService/side-bar-service.service';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserFormComponent } from './user/components/user-form/user-form.component';

registerLocaleData(localeES, 'es-ES', localeEsExtra);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HoverHighlightDirective,
    ArticuloComponent,
    LoginComponent,
    UserFormComponent,
    MostrarContrasenaDirective,
    SidebarComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    ProductModule
  ],

  providers: [
    SideBarServiceService,
    MatDividerModule,
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
