import { Component, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tienda-online-angular-alumnos';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private languageService: LanguageService,
  ) {
    this.languageService?.languages?.forEach(language => {
      this.matIconRegistry.addSvgIcon(
        language?.key,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${language?.key}.svg`)
      );
    });
  }

}
