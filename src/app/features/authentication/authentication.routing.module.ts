import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SignUpModalComponent } from './components/sign-up-modal/sign-up-modal.component';

const routes: Routes = [
  {
   path: '',
    loadChildren: () =>
      import('src/app/features/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: '',
    component: SignUpModalComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
