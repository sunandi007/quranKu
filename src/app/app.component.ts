import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  toggle: any
  prefersDark: any

  constructor() {
    // Query for the toggle that is used to change between themes
    this.toggle = document.querySelector('#themeToggle') || '';

// Listen for the toggle check/uncheck to toggle the dark class on the <body>
    if (this.toggle)
      this.toggle.addEventListener('ionChange', (ev: any) => {
        document.body.classList.toggle('dark', ev.detail.checked);
      });
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Listen for changes to the prefers-color-scheme media query
    this.prefersDark.addListener((e: any) => this.checkToggle(e.matches));

  }

  // Called when the app loads
  loadApp() {
    this.checkToggle(this.prefersDark.matches);
  }

// Called by the media query to check/uncheck the toggle
  checkToggle(shouldCheck: any) {
    this.toggle.checked = shouldCheck;
  }
}
