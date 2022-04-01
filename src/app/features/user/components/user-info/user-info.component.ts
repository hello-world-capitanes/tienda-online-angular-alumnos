import { User } from './../../models/user.module';
import { Component, OnInit } from '@angular/core';
import usersJson from '../../data/users.json';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user = usersJson as User[];
  usuarioMostrar: User | undefined;
  id!:number;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.usuarioMostrar = this.user.find( element =>element.id == id)
  }
}
