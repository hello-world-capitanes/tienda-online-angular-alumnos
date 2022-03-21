import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Language } from '../../models/language.model';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild(MatMenuTrigger) languageMenu!: MatMenuTrigger;

  languages: Language[] = [];

  constructor(
    private languageService: LanguageService,
  ) {
    this.languages = this.languageService?.languages
  }

  ngOnInit(): void {
  }

  getDefaultLanguage(): Language {
    return this.languageService.defaultLanguage;
  }

}
