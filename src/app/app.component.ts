import { Component, ElementRef, NgZone, VERSION, ViewChild } from '@angular/core';
import { Certificate } from './interfaces/certificate';
import {strings as ba} from './translations/ba';
import {strings as en} from './translations/en';
import { Experience } from './interfaces/experience';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  language = 'en';
  githubLogo = 'assets/github.png';
  strings: any = en;

  onNgInit() {
    if(this.language == 'en'){
      this.strings = en;
    }else {
      this.strings = ba;
    }
  }

  showCertificate(certificate: Certificate) {
    document.querySelector('.blur')?.classList.add("active");
    document.querySelector('.certificate-image')?.setAttribute('src', certificate.image);
    document.getElementById('certificateModal')?.classList.add("active");
  }

  hideCertificate () {
    document.querySelector('.blur')?.classList.remove("active");
    document.getElementById('certificateModal')?.classList.remove("active");
  }

  showExperience(experience: Experience) {
    document.querySelector('.blur')?.classList.add("active");
    document.getElementById('experienceModal')?.classList.add("active");
  }

  hideExperience () {
    document.querySelector('.blur')?.classList.remove("active");
    document.getElementById('experienceModal')?.classList.remove("active");
  }

  setTranslation(language: string) {
    if(language == 'en'){
      this.strings = en;
    }else {
      this.strings = ba;
    }
  }
}
