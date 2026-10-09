
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FacultyMember {
  name: string;
  title: string;
  research: string;
  email: string;
  initials: string;
}

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.scss'
})
export class Faculty {
  searchTerm = '';

  faculty: FacultyMember[] = [
    {
      name: 'Dr. Emily Carter',
      title: 'Professor',
      research: 'Artificial Intelligence and Machine Learning',
      email: 'emily.carter@example.edu',
      initials: 'EC'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Associate Professor',
      research: 'Cybersecurity and Network Systems',
      email: 'michael.chen@example.edu',
      initials: 'MC'
    },
    {
      name: 'Dr. Sophia Patel',
      title: 'Assistant Professor',
      research: 'Data Science and Analytics',
      email: 'sophia.patel@example.edu',
      initials: 'SP'
    },
    {
      name: 'Dr. Daniel Brooks',
      title: 'Professor',
      research: 'Software Engineering and Cloud Computing',
      email: 'daniel.brooks@example.edu',
      initials: 'DB'
    }
  ];

  get filteredFaculty(): FacultyMember[] {
    const query = this.searchTerm.trim().toLowerCase();

    if (!query) {
      return this.faculty;
    }

    return this.faculty.filter(member =>
      `${member.name} ${member.title} ${member.research}`
        .toLowerCase()
        .includes(query)
    );
  }
}