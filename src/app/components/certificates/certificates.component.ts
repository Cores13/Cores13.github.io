import { Component, Output, EventEmitter } from '@angular/core';
import { Certificate } from 'src/app/interfaces/certificate';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  @Output() viewCertificateEvent = new EventEmitter<Certificate>();

  certificates: Certificate[] = [
    {
      issuer: 'Sophos',
      title: 'Firewall Engineer',
      image: 'assets/certificates/firewall.png'
    },
    {
      issuer: 'Udemy',
      title: 'Ethereum & Solidity Programming',
      image: 'assets/certificates/solidity.jpg'
    },
    {
      issuer: 'Veeam',
      title: 'Technical Sales Professional',
      image: 'assets/certificates/veeam.jpg'
    },
    {
      issuer: 'American University',
      title: 'C Programming Language',
      image: 'assets/certificates/aubih.jpg'
    },
    {
      issuer: '3CX',
      title: 'Basic Certification',
      image: 'assets/certificates/3cx.jpg'
    },
  ];

  viewCertificate(certificate: Certificate) {
    this.viewCertificateEvent.emit(certificate);
  }
}
