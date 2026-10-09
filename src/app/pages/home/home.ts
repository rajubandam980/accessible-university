
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface UniversityEvent {
  date: string;
  month: string;
  title: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  benefits: Benefit[] = [
    {
      icon: '🎓',
      title: 'Academic Excellence',
      description:
        'Build strong foundations through a rigorous computer science curriculum.'
    },
    {
      icon: '👥',
      title: 'Expert Faculty',
      description:
        'Learn from experienced educators and active researchers.'
    },
    {
      icon: '🔬',
      title: 'Innovative Research',
      description:
        'Explore computing research and develop practical solutions.'
    },
    {
      icon: '🌐',
      title: 'Career Ready',
      description:
        'Develop the skills needed for a technology-driven world.'
    }
  ];

  events: UniversityEvent[] = [
    {
      month: 'OCT',
      date: '15',
      title: 'Guest Lecture: AI and Society',
      time: '2:00 PM',
      location: 'Technology Auditorium'
    },
    {
      month: 'OCT',
      date: '22',
      title: 'Research Showcase',
      time: '10:00 AM',
      location: 'Engineering Hall'
    },
    {
      month: 'NOV',
      date: '05',
      title: 'Industry Panel Discussion',
      time: '1:00 PM',
      location: 'Virtual Event'
    }
  ];
}