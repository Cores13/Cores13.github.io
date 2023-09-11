import { Component, ElementRef, NgZone, VERSION, ViewChild } from '@angular/core';
import { Certificate } from './interfaces/certificate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  githubLogo = 'assets/github.png';

  showCertificate(certificate: Certificate) {
    document.querySelector('.blur')?.classList.add("active");
    document.querySelector('.certificate-image')?.setAttribute('src', certificate.image);
    document.getElementById('certificateModal')?.classList.add("active");
  }

  hideCertificate () {
    document.querySelector('.blur')?.classList.remove("active");
    document.getElementById('certificateModal')?.classList.remove("active");
  }
}
