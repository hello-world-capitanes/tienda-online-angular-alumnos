import { UserServiceService } from './../../../services/user.service';
import  userJson  from '../../../services/user.json';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from '../../../models/user-info';
import { AuthenticationService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user!: UserInfo;

  constructor(
    private route:ActivatedRoute,
    private userService: UserServiceService,
    private authService: AuthenticationService,
  ) {
    if(!!this.authService.userLogged){
      this.user = this.authService.userLogged;
    }
  }

  ngOnInit(): void {
  }

}
