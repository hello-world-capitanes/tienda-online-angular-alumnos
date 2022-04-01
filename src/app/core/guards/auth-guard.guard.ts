import { AuthenticationService } from './../../features/authentication/services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthenticationService){

  }




  canLoad(route: Route, segments: UrlSegment[]): boolean {

    return this.isLogged();
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.isLogged();
  }

  private isLogged(): boolean {
    let user = this.authService?.getUserLogged();
    alert(user);
    return !!user;
  }
}
