
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProgramLevel = 'Undergraduate' | 'Graduate';

interface Program {
  title: string;
  level: ProgramLevel;
  duration: string;
  description: string;
  courses: string[];
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.html',
  styleUrl: './programs.scss'
})
export class Programs {
  selectedLevel = 'All';

  programs: Program[] = [
    {
      title: 'B.S. in Computer Science',
      level: 'Undergraduate',
      duration: '4 years',
      description: 'Build foundations in programming, algorithms, and software development.',
      courses: ['Programming', 'Data Structures', 'Algorithms']
    },
    {
      title: 'B.S. in Software Engineering',
      level: 'Undergraduate',
      duration: '4 years',
      description: 'Learn to design, build, test, and maintain reliable software.',
      courses: ['Software Design', 'Web Development', 'Software Testing']
    },
    {
      title: 'M.S. in Computer Science',
      level: 'Graduate',
      duration: '2 years',
      description: 'Advance your knowledge through specialized study and research.',
      courses: ['Machine Learning', 'Cloud Computing', 'Advanced Algorithms']
    },
    {
      title: 'M.S. in Data Science',
      level: 'Graduate',
      duration: '2 years',
      description: 'Explore data analysis, statistical methods, and intelligent systems.',
      courses: ['Data Mining', 'Statistics', 'Data Visualization']
    }
  ];

  get filteredPrograms(): Program[] {
    if (this.selectedLevel === 'All') {
      return this.programs;
    }

    return this.programs.filter(
      program => program.level === this.selectedLevel
    );
  }

  setLevel(level: string): void {
    this.selectedLevel = level;
  }
}