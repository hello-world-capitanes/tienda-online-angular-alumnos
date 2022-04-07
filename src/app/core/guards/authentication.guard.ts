import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  RouterStateSnapshot
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.isLogged();
  }

  canLoad(): Observable<boolean> {
    return this.isLogged();
  }

  private isLogged(): Observable<boolean> {
    return this.authService.getUserLogged().pipe(map((user) => !!user));
  }
}
