import { User } from './../../models/user.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ProfileServiceService } from '../../services/profile-service/profile-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  usuarioMostrar: User | undefined;
  id!:number;

  constructor(private route: ActivatedRoute,
              private servicioUsuarios: ProfileServiceService) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.usuarioMostrar = this.servicioUsuarios.getUserByID(id);
  }
}
