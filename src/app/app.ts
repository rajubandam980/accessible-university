
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { AccessibilityToolbar } from './shared/accessibility-toolbar/accessibility-toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    AccessibilityToolbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}