import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { MessageType, SNACKBAR_MESSAGE_TYPES } from '../../utils/models/snackbar.types';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  
  private dismissDuration = 5000;
  private dismissSub: Subscription;

  type!: MessageType;
  message!: string;

  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    const DISMISS_SECONDS =
      !!data && !Number.isNaN(data?.duration) && data?.duration > 0
        ? data?.duration
        : this.dismissDuration;
    this.type = !!data?.type ? data?.type : SNACKBAR_MESSAGE_TYPES.info;
    if (!!data) {
      if (!!data?.message && data?.message.length > 0) {
        this.message = data.message
      }
    }

    this.dismissSub = this.snackBarRef.afterOpened().subscribe(() => {
      setInterval(() => {
        this.snackBarRef.dismiss();
      }, DISMISS_SECONDS);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dismissSub?.unsubscribe();
  }

}
