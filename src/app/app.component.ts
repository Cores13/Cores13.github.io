import { Component, ElementRef, NgZone, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  githubLogo = 'assets/github.png';
}
