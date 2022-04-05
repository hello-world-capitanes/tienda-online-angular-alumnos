import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss'],
})
export class StrengthBarComponent implements OnInit {
  @Input() controller: AbstractControl | null = null;

  private readonly COLORS = {
    default: 'black',
    empty: 'grey',
    error: 'red',
    warning: 'orange',
    correct: 'green',
  };

  private readonly OPTIONS = {
    empty: {
      message: '',
      color: this.COLORS.empty,
      styles: [this.COLORS.empty, this.COLORS.empty, this.COLORS.empty],
    },
    minLength: {
      message: 'Introduce al menos 6 caracteres',
      color: this.COLORS.error,
      styles: [this.COLORS.error, this.COLORS.empty, this.COLORS.empty],
    },
    maxLength: {
      message: 'Débil',
      color: this.COLORS.warning,
      styles: [this.COLORS.warning, this.COLORS.warning, this.COLORS.empty],
    },
    correct: {
      message: 'Segura',
      color: this.COLORS.correct,
      styles: [this.COLORS.correct, this.COLORS.correct, this.COLORS.correct],
    },
  };

  message: string = this.OPTIONS.empty.message;
  styles: string[] = this.OPTIONS.empty.styles;
  color: string = this.OPTIONS.empty.color;

  constructor() {}

  ngOnInit(): void {
    if (!!this.controller) {
      this.controller.valueChanges.subscribe((password: string) => {
        if (!password || password.length === 0) {
          this.color = this.OPTIONS.empty.color;
          this.message = this.OPTIONS.empty.message;
          this.styles = this.OPTIONS.empty.styles;
        } else if (password.length < 6) {
          this.color = this.OPTIONS.minLength.color;
          this.message = this.OPTIONS.minLength.message;
          this.styles = this.OPTIONS.minLength.styles;
        } else if (password.length >= 6 && password.length <= 8) {
          this.color = this.OPTIONS.maxLength.color;
          this.message = this.OPTIONS.maxLength.message;
          this.styles = this.OPTIONS.maxLength.styles;
        } else if (password.length > 9) {
          this.color = this.OPTIONS.correct.color;
          this.message = this.OPTIONS.correct.message;
          this.styles = this.OPTIONS.correct.styles;
        }
      });
    }
  }

  getBackground(color: string) {
    return { 'background-color': color };
  }
}
