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
        location: 'Sarajevo (Bosnia and Herzegovina)',
        responsibilities: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quibusdam dolore atque, minus, laboriosam nostrum provident, tempore beatae",
        ]
      }
    },
    {
      company: 'Comversum',
      title: 'Head of IT Department',
      from: 'Jul 2022',
      to: 'Apr 2023',
      details: {
        location: 'Tuzla (Bosnia and Herzegovina)',
        responsibilities: ["test"]
      }
    },
    {
      company: 'Leftor',
      title: 'Full Stack Software Developer',
      from: 'Nov 2021',
      to: 'Jul 2022',
      details: {
        location: 'Tuzla (Bosnia and Herzegovina)',
        responsibilities: ["test"]
      }
    },
    {
      company: 'Ideaology',
      title: 'Full Stack Blockchain Developer',
      from: 'May 2021',
      to: 'Nov 2021',
      details: {
        location: 'Lukavac (Bosnia and Herzegovina)',
        responsibilities: ["test"]
      }
    },
  ];

  viewExperience(experience: Experience) {
    this.viewExperienceEvent.emit(experience);
  }
}
