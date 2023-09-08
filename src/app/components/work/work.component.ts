import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  projects: Project[] = [
    {
      title: 'Social media',
      image: 'assets/projects/stranger.webp',
      link: 'https://github.com/Cores13/social_media'
    },
    {
      title: 'Delivery app',
      image: 'assets/projects/stranger.webp',
      link: 'https://github.com/Cores13/delivery_app'
    },
    {
      title: 'Social media',
      image: 'assets/projects/stranger.webp',
      link: 'https://github.com/Cores13/delivery_app'
    },
  ];
}
