import {Component, Renderer2} from '@angular/core';
import {ThemeService} from "./_service/theme.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public selectTheme: any;

  constructor(private theme: ThemeService,
              private renderer: Renderer2) {
  }

  onToggleTheme(event: any) {
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    }
  }

}
