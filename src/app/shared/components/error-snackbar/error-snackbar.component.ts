import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-error-snackbar',
  templateUrl: './error-snackbar.component.html',
  styleUrls: ['./error-snackbar.component.scss'],
})
export class ErrorSnackbarComponent implements OnInit, OnDestroy {
  
  private dismissDuration = 5000;
  private dismissSub: Subscription;

  errorMessage!: string;

  constructor(
    public snackBarRef: MatSnackBarRef<ErrorSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    const DISMISS_SECONDS =
      !!data && !Number.isNaN(data?.duration) && data?.duration > 0
        ? data?.duration
        : this.dismissDuration;
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
