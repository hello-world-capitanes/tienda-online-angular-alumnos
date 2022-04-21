import { AuthenticationService } from './features/authentication/services/authentication.service';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeES from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import {
  ScreenTrackingService,
  UserTrackingService
} from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { CategoriesComponent } from './features/categories/categories.component';
import { HabitualesComponent } from './features/habituales/habituales.component';
import { HomeComponent } from './features/home/home.component';
import { ProductModule } from './features/product/product.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeES, 'es-ES', localeEsExtra);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    HabitualesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    CoreModule,
    SharedModule,
    AuthenticationModule,
    ProductModule,

    MatDividerModule,

    // Firebase config
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    //AngularFireStorageModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
