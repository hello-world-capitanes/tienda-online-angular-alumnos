import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ProductHighlightDirective } from './directive/directive-example';
import { AuthComponent } from './features/auth/auth/auth.component';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { CategoriesComponent } from './features/categories/categories.component';
import { HabitualesComponent } from './features/habituales/habituales.component';
import { HomeComponent } from './features/home/home.component';
import { ProductModule } from './features/product/product.module';
import { UserModule } from './features/user/user.module';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ModalRegisterComponent } from './register/modal-register.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeES, 'es-ES', localeEsExtra);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductHighlightDirective,
    ModalRegisterComponent,
    CategoriesComponent,
    HabitualesComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AuthenticationModule,
    ProductModule,
    MatDividerModule,
    UserModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
function localeEsExtra(localeES: any, arg1: string, localeEsExtra: any) {
  throw new Error('Function not implemented.');
}

function localeES(localeES: any, arg1: string, localeEsExtra: (localeES: any, arg1: string, localeEsExtra: any) => void) {
  throw new Error('Function not implemented.');
}

