import { User } from './../../models/user.module';
import { Component, OnInit } from '@angular/core';
import * as data from '../../data/users.json';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user = data as User[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
