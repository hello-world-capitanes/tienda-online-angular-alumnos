import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import usersjson from "src/app/features/user/data/users.json";

interface User{
  id:string;
  email:string;
  name:string;
  lastname:string;

}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user?: User;

  constructor(
    private router: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this.user = usersjson.find(data=> data.id==this.router.snapshot.paramMap.get('id'));
  }

}
