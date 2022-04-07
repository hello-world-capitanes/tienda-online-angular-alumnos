import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/features/user/models/user.model';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent implements OnInit {

  @Input('userLogged') user!: User | null;

  constructor() { }

  ngOnInit(): void {
  }

}
