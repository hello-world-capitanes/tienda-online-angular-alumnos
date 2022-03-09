import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from 'src/app/modal-login/modal-login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {

  }

  openDialog(){
    this.dialog.open(ModalLoginComponent, {
      width: '250px',
    });
  }

  ngOnInit(): void {
  }

}
