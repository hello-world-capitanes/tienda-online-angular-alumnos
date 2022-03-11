import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalLoginComponent } from 'src/app/login/modal-login.component';
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

  openDialog() {
    const loginDialog = this.dialog.open(ModalLoginComponent, {
      width: '250px',
    });
    loginDialog.afterClosed().subscribe(result => {
      if (result) {
        alert('Logged')
      }
    });
  }

  ngOnInit(): void {
  }

}
