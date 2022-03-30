import { Component, OnInit } from '@angular/core';
import * as data from '../../data/users.json';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user = data;

  constructor() {

  }

  ngOnInit(): void {
  }

}
