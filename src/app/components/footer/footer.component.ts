import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() strings: any; // decorate the property with @Input()
  @Output() setTranslationEvent = new EventEmitter<string>();

  secondaryColor:string = '0x000000';
  primaryColor: string = '0x32a883';

  setTranslation(language: string) {
    console.log(language)
    this.setTranslationEvent.emit(language);
  }
}
