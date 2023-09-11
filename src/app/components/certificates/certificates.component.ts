import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Certificate } from 'src/app/interfaces/certificate';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  @Input() strings: any; // decorate the property with @Input()
  @Output() viewCertificateEvent = new EventEmitter<Certificate>();

  certificates: Certificate[] = [
    {
      issuer: 'Sophos',
      title: 'Firewall Engineer',
      image: 'assets/certificates/sophos.png'
    },
    {
      issuer: 'Udemy',
      title: 'Ethereum & Solidity Programming',
      image: 'assets/certificates/udemy.png'
    },
    {
      issuer: 'Veeam',
      title: 'Technical Sales Professional',
      image: 'assets/certificates/veeam.png'
    },
    {
      issuer: 'American University',
      title: 'C Programming Language',
      image: 'assets/certificates/aubih.png'
    },
    {
      issuer: '3CX',
      title: 'Basic Certification',
      image: 'assets/certificates/3cx.png'
    },
  ];

  viewCertificate(certificate: Certificate) {
    this.viewCertificateEvent.emit(certificate);
  }
}
