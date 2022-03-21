import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _defaultLanguage?: Language;

  _languages = [
    new Language("en-US", "English"),
    new Language("es-ES", "Español"),
  ]

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) {
    if (!!locale && locale.length > 0) {
      this._defaultLanguage = this._languages?.find(lang => lang?.key === locale);
    }
  }

  get languages(): Language[] {
    return this._languages;
  }

  get defaultLanguage(): Language {
    return this._defaultLanguage!;
  }

  changeLanguage(language: Language): void {
    if (!!language && !!language?.key && language?.key?.length > 0) {
      const selectedLanguage = this._languages?.find(lang => lang?.key === language?.key);
      if (!!selectedLanguage) {
        this._defaultLanguage = selectedLanguage;
      }
    }
  }

  getIconPath(key: string): string | null {
    return !!key && key?.length > 0 && this._languages.find(lang => lang?.key === key) ? `assets/icons/${key}.svg` : null;
  }
  
}