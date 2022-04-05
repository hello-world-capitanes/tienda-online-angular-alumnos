import { AuthenticationService } from 'src/app/core/services/Authentication/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
  constructor(private authService: AuthenticationService){}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    return this.authService.isLogged();
  }
}
