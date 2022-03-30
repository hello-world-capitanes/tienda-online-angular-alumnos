import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { UserInfo } from '../models/user-info';


export interface ApiProduct {
  id: number;
  name: string;
  surname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserApiService extends ApiService {

  private readonly USER_URL = "user/";

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  getUsers(): Observable<UserInfo[]> {
    return this.http.get(`${this.API_URL}/${this.USER_URL}`).pipe(map((res) => {
      const users = res as ApiProduct[];
      return users?.map(u => new UserInfo(u.id, u.name, u.surname, u.email,));
    }));
  }

}
