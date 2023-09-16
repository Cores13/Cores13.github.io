import { Component, ElementRef, NgZone, VERSION, ViewChild } from '@angular/core';
import { Certificate } from './interfaces/certificate';
import {strings as ba} from './translations/ba';
import {strings as en} from './translations/en';
import { Experience } from './interfaces/experience';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ExperienceComponent) experienceComponent:ExperienceComponent;
  language = 'en';
  secondaryColor:string = '0x000000';
  primaryColor: string = '0x32a883';
  githubLogo = 'assets/github.webp';
  strings: any = en;
  experience: Experience = {
    company: '',
    title: '',
    from: '',
    to: '',
    details: {
      description: '',
      location: '',
      responsibilities: [],
      link: "!#"
    }
  };

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
    document.querySelector('body')!.style.overflowY = "hidden";
  }

  hideCertificate () {
    document.querySelector('.blur')?.classList.remove("active");
    document.getElementById('certificateModal')?.classList.remove("active");
    document.querySelector('.certificate-image')?.setAttribute('src', '');
    document.querySelector('body')!.style.overflowY = "scroll";
  }

  showExperience(experience: Experience) {
    document.querySelector('.blur')?.classList.add("active");
    document.getElementById('experienceModal')?.classList.add("active");
    document.querySelector('body')!.style.overflowY = "hidden";
    document.getElementById('experienceContentWrapper')!.style.overflowY = "scroll";
    this.experience = experience;
  }

  hideExperience () {
    document.querySelector('.blur')?.classList.remove("active");
    document.getElementById('experienceModal')?.classList.remove("active");
    document.querySelector('body')!.style.overflowY = "scroll";
    document.getElementById('experienceContentWrapper')!.style.overflowY = "hidden";
    this.experience = {
      company: '',
      title: '',
      from: '',
      to: '',
      details: {
        description: '',
        location: '',
        responsibilities: [],
        link: "!#"
      }
    };
  }

  showContactForm() {
    document.querySelector('.light-blur')?.classList.add("active");
    document.querySelector('.contact-form')?.classList.add("active");
    document.querySelector('body')!.style.overflowY = "hidden";
  }

  hideContactForm() {
    document.querySelector('.light-blur')?.classList.remove("active");
    document.querySelector('.contact-form')?.classList.remove("active");
    document.querySelector('body')!.style.overflowY = "scroll";
  }

  setTranslation(language: string) {
    if(language == 'en'){
      this.strings = en;
    }else {
      this.strings = ba;
    }
  }
}
