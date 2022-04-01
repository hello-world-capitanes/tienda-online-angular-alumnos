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
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ShoppingCartModule } from '../features/shopping-cart/shopping-cart.module';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonLanguageComponent } from './components/button-language/button-language.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { OverShadowDirective } from './directives/over-shadow.directive';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    SidebarLayoutComponent,
    FooterComponent,
    SignInFormComponent,
    BannerComponent,
    ButtonLanguageComponent,
    OverShadowDirective,
    HeaderComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ShoppingCartModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatExpansionModule,
    MatDialogModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  exports: [
    SidebarLayoutComponent,
    BannerComponent,
    OverShadowDirective,
    HeaderComponent
  ]
})

export class SharedModule { }
