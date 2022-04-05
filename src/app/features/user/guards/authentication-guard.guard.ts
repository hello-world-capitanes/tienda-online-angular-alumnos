import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardGuard implements CanLoad{

  constructor(private authService: AuthServiceService){
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isLogged();
  }

  private isLogged(): boolean {
    return this.authService.getUserLogged();
  }

}
