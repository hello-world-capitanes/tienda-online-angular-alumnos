import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent implements OnInit {

  isShoppingCartOpened: boolean = false;

  constructor() {
    
  }

  ngOnInit(): void {
  }

  toggleShoppingCart(toggle?: boolean) {
      this.isShoppingCartOpened = (toggle === undefined || toggle === null) ? !this.isShoppingCartOpened : !!toggle;
  }

}
