import { Component, Input } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @Input() strings: any; // decorate the property with @Input()

  projects: Project[] = [
    {
      title: 'Social media',
      image: 'assets/projects/stranger.webp',
      link: 'https://github.com/Cores13/social_media'
    },
    {
      title: 'Delivery app',
      image: 'assets/projects/delivery.webp',
      link: 'https://github.com/Cores13/delivery_app'
    },
    {
      title: 'Todo app',
      image: 'assets/projects/todos.webp',
      link: 'https://github.com/Cores13/to_do_list_app'
    },
    {
      title: 'Job App',
      image: 'assets/projects/jobs.webp',
      link: 'https://github.com/Cores13/react_native_jobs'
    },
    {
      title: 'Aventus',
      image: 'assets/projects/aventus.webp',
      link: 'https://aventus.ba/'
    },
    {
      title: 'Offroad BiH',
      image: 'assets/projects/offroad.webp',
      link: 'https://offroad.ba/'
    },
    {
      title: 'R3F Website',
      image: 'assets/projects/r3f.webp',
      link: 'https://github.com/Cores13/react_three_fiber_website'
    },
    {
      title: 'Cup of Coffee',
      image: 'assets/projects/cup_of_coffee.webp',
      link: 'https://github.com/Cores13/cup_of_coffee'
    },
  ];
}
