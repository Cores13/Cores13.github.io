import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';
import { Experiences } from 'src/app/interfaces/experiences';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() strings!: any; // decorate the property with @Input()
  @Output() viewExperienceEvent = new EventEmitter<Experience>();

  experiences: Experiences = Object.freeze({
    en: [
      {
        id: 0,
        company: 'Purple Matrix',
        title: 'Full Stack Software Developer',
        from: 'Apr 2023',
        to: 'Now',
        details: {
          description: "Full stack software development of web applications, web shops, CRMs, magazines, form based applications and enterprise applications using .NET, Laravel, ReactJS, Angular, Blade, TypeScript and JavaScript.",
          location: 'London (United Kingdom)',
          responsibilities: [
            "Development of user interface for web applications using Angular, React, Blade, TypeScript and JavaScript ES6",
            "Backend development using Laravel and .NET",
            "User interface development for mobile applications (Android and iOS) using React Native",
            "Redux state management",
            "NgRx state management",
            "JWT Authentication",
            "Bootstrap, Tailwind and MaterialUI",
            "MySQL, Microsoft SQL",
            "Deployment on Azure, Ubuntu and shared hosting (cPanel, plesk)",
          ],
          link: "https://purplematrix.co.uk/"
        }
      },
      {
        id: 1,
        company: 'Purple Key',
        title: 'Full Stack Software Developer',
        from: 'Apr 2023',
        to: 'Now',
        details: {
          description: "Full stack software development of mobile applications, web applications, web shops, CRMs, magazines and form based websites using React Native, .NET, Laravel, ReactJS, Angular, Blade, TypeScript and JavaScript.",
          location: 'Sarajevo (Bosnia and Herzegovina)',
          responsibilities: [
            "Development of user interface for web applications using Angular, React, Blade, TypeScript and JavaScript ES6",
            "Backend development using Laravel and .NET",
            "User interface development for mobile applications (Android and iOS) using React Native",
            "Redux state management",
            "NgRx state management",
            "JWT Authentication",
            "Bootstrap, Tailwind and MaterialUI",
            "MySQL, Microsoft SQL",
            "Deployment on Azure, Ubuntu and shared hosting (cPanel, plesk)",
          ],
          link: "https://purplekey.ba/"
        }
      },
      {
        id: 2,
        company: 'Comversum',
        title: 'Head of IT Department',
        from: 'Jul 2022',
        to: 'Apr 2023',
        details: {
          description: "Leading network security, system administration and software development operations.",
          location: 'Tuzla (Bosnia and Herzegovina)',
          responsibilities: [
            "Configuration and maintenance HP, Ruckus and Sophos switches",
            "Configuration and maintenance HP and Synology servers and storages (NAS)",
            "Configuration and maintenance Ruckus Access Points",
            "Installation, configuration, administration and maintenance of VMware",
            "Configuration and administration of Sophos firewalls, access points and endpoint protection",
            "Installation, configuration and administration of network equipment in public transportation",
            "Installation, configuration and administration of 3CX (VoIP)",
            "Debugging and troubleshooting of Windows XP, Windows 7, Windows 10 and Windows 11 operating systems",
            "Managing Comversum's and client's network, servers, computers and other IT infrastructure",
            "Installation, configuration and maintenance of KONICA MINOLTA, HP and Lexmark multifunctional printers",
            "Diagnosing problems with servers, computers and other IT equipment (Troubleshooting)",
            "Making backups with Veeam N-Able and Acronis",
            "Installation, configuration, and administration of Windows and Linux servers",
            "Monitoring of IT systems using SolarWinds and N-Able",
            "Configuration of HaloPSA",
            "Planning infrastructure",
            "Planing hardware and software replacements",
            "Project management",
            "Teaching new employees programming, networking, hardware, and softwares",
            "Web development using React, Angular, NodeJS, Laravel, .NET, Javascript, Typescript, HTML and CSS",
            "Web design using Wordpress and Joomla"
          ],
          link: "https://comversum.com/"
        }
      },
      {
        id: 3,
        company: 'Leftor',
        title: 'Full Stack Software Developer',
        from: 'Nov 2021',
        to: 'Jul 2022',
        details: {
          description: "Full stack web development of web shops, CRMs, magazines and form based websites using mostly Laravel, ReactJS, Blade, TypeScript and JavaScript.",
          location: 'Tuzla (Bosnia and Herzegovina)',
          responsibilities: [
            "Frontend development using Blade, ReactJS, NextJS, TypeScript and JavaScript ES6",
            "Backend development using Laravel 8, Laravel 9, NodeJS",
            "Wordpress and Joomla custom components",
            "Redux state management",
            "Bootstrap and MaterialUI",
            "MySQL, MongoDB",
            "Soap Client"
          ],
          link: "https://leftor.com/"
        }
      },
      {
        id: 4,
        company: 'Ideaology',
        title: 'Full Stack Blockchain Developer',
        from: 'May 2021',
        to: 'Nov 2021',
        details: {
          description: "Web development using mostly Node.js and React and blockchain development using web3 and solidity",
          location: 'Lukavac (Bosnia and Herzegovina)',
          responsibilities: [
            "Frontend development using ReactJS, NextJS, Angular, TypeScript and JavaScript ES6",
            "Backend development using NodeJS and Express",
            "Blockchain development using Solidity and Web3",
            "3D animations using React Three Fiber",
            "Writing test using Cypress",
            "Redux state management",
            "Bootstrap and MaterialUI",
            "MySQL and MongoDB"
          ],
          link: "https://www.ideaology.io/"
        }
      }
    ],
    ba: [
      {
        id: 5,
        company: 'Purple Matrix',
        title: 'Full Stack Software Developer',
        from: 'Apr 2023',
        to: 'Sada',
        details: {
          description: "Razvoj mobilnih aplikacija, web aplikacija, web trgovina, CRM sustava, časopisa, web aplikacija temeljenih na obrascima i poslovnih aplikacija, koristeći .NET, Laravel, ReactJS, Angular, Blade, TypeScript i JavaScript.",
          location: 'London (Ujedinjeno Kraljevstvo)',
          responsibilities: [
            "Razvoj korisničkog sučelja za web aplikacije koristeći Blade, ReactJS, VueJS, TypeScript i JavaScript ES6",
            "Backend razvoj koristeći Laravel i .NET",
            "Razvoj korisničkog sučelja za mobilne aplikacija (Android i iOS) koristeći React Native",
            "Redux upravljanje stanjem",
            "Bootstrap, Tailwind i MaterialUI",
            "MySQL, MongoDB",
            "Deployment na Azure, Ubuntu i shared hosting (cPanel)",
          ],
          link: "https://purplematrix.co.uk/"
        }
      },
      {
        id: 6,
        company: 'Purple Key',
        title: 'Full Stack Software Developer',
        from: 'Apr 2023',
        to: 'Sada',
        details: {
          description: "Razvoj mobilnih aplikacija, web aplikacija, web trgovina, CRM sustava, časopisa i web stranica temeljenih na obrascima, koristeći React Native, .NET, Laravel, ReactJS, Angular, Blade, TypeScript i JavaScript.",
          location: 'Sarajevo (Bosna i Hercegovina)',
          responsibilities: [
            "Razvoj korisničkog sučelja za web aplikacije koristeći Blade, ReactJS, VueJS, TypeScript i JavaScript ES6",
            "Backend razvoj koristeći Laravel i .NET",
            "Razvoj korisničkog sučelja za mobilne aplikacija (Android i iOS) koristeći React Native",
            "Redux upravljanje stanjem",
            "Bootstrap, Tailwind i MaterialUI",
            "MySQL, MongoDB",
            "Deployment na Azure, Ubuntu i shared hosting (cPanel)",
          ],
          link: "https://purplekey.ba/"
        }
      },
      {
        id: 7,
        company: 'Comversum',
        title: 'Rukovodilac IT sektora',
        from: 'Jul 2022',
        to: 'Apr 2023',
        details: {
          description: "Vođenje operacija za mrežnu sigurnost, administraciju sustava i razvoj softvera.",
          location: 'Tuzla (Bosna i Hercegovina)',
          responsibilities: [
            "Konfiguracija i održavanje HP, Ruckus i Sophos switcheva",
            "Konfiguracija i održavanje HP i Synology servera i NAS-ova",
            "Konfiguracija i održavanje Ruckus pristupnih tačaka",
            "Instalacija, konfiguracija, administracija i održavanje VMware-a",
            "Konfiguracija i administracija Sophos firewall-a, pristupnih tačaka i zaštite krajnjih tačaka",
            "Instalacija, konfiguracija i administracija mrežne opreme u javnom prevozu",
            "Instalacija, konfiguracija i administracija 3CX VoIP-a",
            "Otklanjanje grešaka i problema sa Windows XP, Windows 7, Windows 10 i Windows 11 operativnim sistemima",
            "Upravljanje Comversum-ovom mrežim i mrežama klijenata, serverima, računarima i drugom IT infrastrukturom",
            "Instalacija, konfiguracija i održavanje višenamjenskih štampača KONICA MINOLTA, HP i Lexmark",
            "Dijagnostikovanje problema sa serverima, računarima i drugom IT opremom (otklanjanje problema)",
            "Pravljenje rezervnih kopija sa Veeam N-Able i Acronis",
            "Instalacija, konfiguracija i administracija Windows i Linux servera",
            "Monitoring IT sistema koristeći SolarWinds i N-Able",
            "Konfiguracija HaloPSA",
            "Planiranje infrastrukture",
            "Planiranje zamjene hardvera i softvera",
            "Upravljanje projektima",
            "Podučavanje novih zaposlenika programiranju, umrežavanju, hardveru i softveru",
            "Web razvoj koristeći React, Angular, NodeJS, Laravel, .NET, Javascript, Typescript, HTML i CSS",
            "Web dizajn koristeći Wordpress i Joomla",
          ],
          link: "https://comversum.com/"
        }
      },
      {
        id: 8,
        company: 'Leftor',
        title: 'Full Stack Software Developer',
        from: 'Nov 2021',
        to: 'Jul 2022',
        details: {
          description: "Razvoj web trgovina, CRM sustava, časopisa i web stranica temeljenih na obrascima, uglavnom koristeći Laravel, ReactJS, Blade, TypeScript i JavaScript.",
          location: 'Tuzla (Bosna i Hercegovina)',
          responsibilities: [
            "Frontend razvoj koristeći Blade, ReactJS, NextJS, TypeScript i JavaScript ES6",
            "Backend razvoj koristeći Laravel 8, Laravel 9, NodeJS",
            "Wordpress i Joomla prilagođene komponente",
            "Redux upravljanje stanjem",
            "Bootstrap i MaterialUI",
            "MySQL, MongoDB",
            "Soap client",
          ],
          link: "https://leftor.com/"
        }

      },
      {
        id: 9,
        company: 'Ideaology',
        title: 'Full Stack Blockchain Developer',
        from: 'Maj 2021',
        to: 'Nov 2021',
        details: {
          description: "Razvoj web aplikacija, uglavnom koristeći Node.js i React, te razvoj aplikacija baziranih na blockchain-u koristeći web3 i Solidity",
          location: 'Lukavac (Bosna i Hercegovina)',
          responsibilities: [
            "Frontend razvoj koristeći ReactJS, NextJS, Angular, TypeScript i JavaScript ES6",
            "Backend razvoj koristeći NodeJS i Express",
            "Blockchain razvoj koristeći Solidity i Web3",
            "3D animacije pomoću React Three Fiber",
            "Pisanje testova koristeći Cypress",
            "Redux upravljanje stanjem",
            "Bootstrap i MaterialUI",
            "MySQL i MongoDB",
          ],
          link: "https://www.ideaology.io/"
        }
      }
    ]
  });

  trackByFn(index: any, experience: Experience) {
    return experience.id;
  }

  viewExperience(experience: Experience) {
    this.viewExperienceEvent.emit(experience);
  }
}
