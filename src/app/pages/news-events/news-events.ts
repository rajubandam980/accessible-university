
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  title: string;
  category: 'Event' | 'News' | 'Research';
  date: string;
  description: string;
  location?: string;
}

@Component({
  selector: 'app-news-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-events.html',
  styleUrl: './news-events.scss'
})
export class NewsEvents {
  selectedCategory = 'All';

  items: NewsItem[] = [
    {
      title: 'Guest Lecture: AI and Society',
      category: 'Event',
      date: 'October 15',
      description: 'Explore how artificial intelligence is changing society and industry.',
      location: 'Technology Auditorium'
    },
    {
      title: 'Student Research Showcase',
      category: 'Event',
      date: 'October 22',
      description: 'Students present projects in software engineering, AI, and data science.',
      location: 'Engineering Hall'
    },
    {
      title: 'Computing Research Highlights',
      category: 'Research',
      date: 'October 10',
      description: 'Discover sample research topics in intelligent systems and secure computing.'
    },
    {
      title: 'Department Student Community',
      category: 'News',
      date: 'October 8',
      description: 'Learn about student collaboration, peer learning, and project opportunities.'
    },
    {
      title: 'Industry Panel Discussion',
      category: 'Event',
      date: 'November 5',
      description: 'Hear perspectives on careers and emerging trends in technology.',
      location: 'Virtual Event'
    }
  ];

  get filteredItems(): NewsItem[] {
    if (this.selectedCategory === 'All') {
      return this.items;
    }

    return this.items.filter(
      item => item.category === this.selectedCategory
    );
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }
}