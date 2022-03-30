import { User } from './../../../../shared/components/sign-in-form/models/email-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../models/user-info';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  id!: string|null;
  user = new UserInfo(1, "Marta", "Rodriguez", "marta@gmail.com");

  constructor(
    private userService: UserService,
    private _route: ActivatedRoute
  ) {
/*     this.userService.users$.subscribe(usersFromApi => {
      this.user = (!!usersFromApi && usersFromApi.length > 0 ? usersFromApi : []);
    }) */
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

}
