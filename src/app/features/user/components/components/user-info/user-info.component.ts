import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/features/auth/services/auth.service';
import { UserInfo } from '../../../models/user-info';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user!: UserInfo;

  constructor(
    private route:ActivatedRoute,
    private userService: UserService,
    private authService: AuthenticationService,
  ) {
    if(!!this.authService.userLogged){
      this.user = this.authService.userLogged;
    }
  }

  ngOnInit(): void {
  }

}
