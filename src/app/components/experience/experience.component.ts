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
      to: 'Now'
    },
    {
      company: 'Comversum',
      title: 'Head of IT Department',
      from: 'Jul 2022',
      to: 'Apr 2023'
    },
    {
      company: 'Leftor',
      title: 'Full Stack Software Developer',
      from: 'Nov 2021',
      to: 'Jul 2022'
    },
    {
      company: 'Ideaology',
      title: 'Full Stack Blockchain Developer',
      from: 'May 2021',
      to: 'Nov 2021'
    },
  ];

  viewExperience(experience: Experience) {
    this.viewExperienceEvent.emit(experience);
  }
}
