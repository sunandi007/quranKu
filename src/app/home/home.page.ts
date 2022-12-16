import {Component, Renderer2} from '@angular/core';
import {NameOfAllohModel} from './_model/AsmaulModel';
import nameOfAlloh from "../../assets/data/data.json";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public selectTheme: any;
  isDark: boolean = false;
  private AsmaAlHusna: any[] = nameOfAlloh

  constructor(private renderer: Renderer2) {
  }

  onToggleTheme(event: any) {
    if (event.detail.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    }
  }

  onSwitchTheme(event: boolean) {
    console.log('event', event);
    this.isDark = event
    if (this.isDark) {
      console.log('true')
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    } else {
      console.log('false')
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    }
  }

  get nameLatin() {
    return this.AsmaAlHusna[0].latin
  }

  get nameArab() {
    return this.AsmaAlHusna[0].arab
  }

  get nameArti() {
    return this.AsmaAlHusna[0].arti
  }

}
