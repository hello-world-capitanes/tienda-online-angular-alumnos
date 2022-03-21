import { Component, Input, OnInit } from '@angular/core';
import { Language } from '../../models/language.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-button-language',
  templateUrl: './button-language.component.html',
  styleUrls: ['./button-language.component.scss']
})
export class ButtonLanguageComponent implements OnInit {

  @Input() isButtonDisabled: boolean = false;
  @Input() language!: Language;

  constructor(
    private languageService: LanguageService,
  ) { }

  ngOnInit(): void {
  }

  changeLanguage(language: Language): void {
    this.languageService.changeLanguage(language);
  }

}
