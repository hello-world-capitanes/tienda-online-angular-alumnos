import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ShoppingCartModule } from '../features/shopping-cart/shopping-cart.module';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonLanguageComponent } from './components/button-language/button-language.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginButtonComponent } from './components/header/login-button/login-button.component';
import { ProfileButtonComponent } from './components/header/profile-button/profile-button.component';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import { OverShadowDirective } from './directives/over-shadow.directive';

@NgModule({
  declarations: [
    SidebarLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ButtonLanguageComponent,

    OverShadowDirective,
    SnackbarComponent,
    LoginButtonComponent,
    ProfileButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ShoppingCartModule,

    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [
    SidebarLayoutComponent,
    BannerComponent,
    OverShadowDirective,
    SnackbarComponent
  ]
})
export class SharedModule { }
