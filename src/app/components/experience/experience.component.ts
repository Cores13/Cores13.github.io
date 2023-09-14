import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() strings: any; // decorate the property with @Input()
  @Output() viewExperienceEvent = new EventEmitter<Experience>();

  experiences: Experience[] = [
    {
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
      company: 'Comversum',
      title: 'Head of IT Department',
      from: 'Jul 2022',
      to: 'Apr 2023',
      details: {
        description: "Leading network security, system administration and software development operations.",
        location: 'Tuzla (Bosnia and Herzegovina)',
        responsibilities: ["test"],
        link: "https://comversum.com/"
      }
    },
    {
      company: 'Leftor',
      title: 'Full Stack Software Developer',
      from: 'Nov 2021',
      to: 'Jul 2022',
      details: {
        description: "Full stack web development of web shops, CRMs, magazines and form based websites using mostly Laravel, ReactJS, Blade, TypeScript and JavaScript.",
        location: 'Tuzla (Bosnia and Herzegovina)',
        responsibilities: ["test"],
        link: "https://leftor.com/"
      }
    },
    {
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
    },
  ];

  viewExperience(experience: Experience) {
    this.viewExperienceEvent.emit(experience);
  }
}
