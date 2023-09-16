import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() strings: any; // decorate the property with @Input()
  @Output() setTranslationEvent = new EventEmitter<string>();

  setTranslation(language: string) {
    this.setTranslationEvent.emit(language);
  }
}
