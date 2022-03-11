import { SideBarServiceService } from './services/sideBarService/side-bar-service.service';
import { MatIconModule } from '@angular/material/icon';
import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { SharedModule } from './shared/shared.module';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { ArticuloComponent } from './articulo/articulo.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { MostrarContrasenaDirective } from './directives/mostrar-contrasena.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    HoverHighlightDirective,
    ArticuloComponent,
    LoginComponent,
    CreateAccountComponent,
    UserFormComponent,
    MostrarContrasenaDirective,
    SidebarComponent
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
    MatDividerModule
  ],

  providers: [SideBarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
