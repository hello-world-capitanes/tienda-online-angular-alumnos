import localeES from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductModule } from './core/product/product.module';
import { ProductHighlightDirective } from './directive/directive-example';

import { ModalLoginComponent } from './login/modal-login.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ModalRegisterComponent } from './register/modal-register.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './core/home/home.component';

registerLocaleData(localeES, 'es-ES', localeEsExtra);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductHighlightDirective,
    ModalLoginComponent,
    ModalRegisterComponent,
    CarritoComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    ProductModule,
    MatDividerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
