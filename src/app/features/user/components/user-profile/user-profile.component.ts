import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user!: User | null;

  private routerSub!: Subscription;
  private findUserSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(event => {
      const id = event?.['id'];
      if (!!id && id.length > 0) {
        this.findUserSub = this.userService.findUserById(id).subscribe(user => {
          this.user = (!!user ? user : null);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.findUserSub?.unsubscribe();
  }

}
