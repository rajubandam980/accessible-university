
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  values = [
    {
      title: 'Academic Excellence',
      description: 'We encourage critical thinking, strong foundations, and lifelong learning.'
    },
    {
      title: 'Innovation',
      description: 'We explore new ideas to solve real-world computing challenges.'
    },
    {
      title: 'Collaboration',
      description: 'We bring students, faculty, and industry together to create impact.'
    }
  ];
}