import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { SideBarServiceService } from 'src/app/services/sideBarService/side-bar-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  toggleActive:boolean = false;

  constructor(
    public dialog: MatDialog,
    private sidenav: SideBarServiceService) {}

  ngOnInit(): void {

  }

  openLogin(): void {
      const dialogRef = this.dialog.open(LoginComponent);
  }

  activateSideNav(){
    this.toggleActive = !this.toggleActive;
    this.sidenav.toggle();
    console.log(this.sidenav);

  }

}

