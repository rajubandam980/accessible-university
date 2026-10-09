
import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Programs } from './pages/programs/programs';
import { Faculty } from './pages/faculty/faculty';
import { NewsEvents } from './pages/news-events/news-events';
import { Contact } from './pages/contact/contact';
import { Placeholder } from './pages/placeholder/placeholder';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home | Northfield University'
  },
  {
    path: 'about',
    component: About,
    title: 'About | Northfield University'
  },
  {
    path: 'programs',
    component: Programs,
    title: 'Programs | Northfield University'
  },
  {
    path: 'faculty',
    component: Faculty,
    title: 'Faculty | Northfield University'
  },
  {
    path: 'news-events',
    component: NewsEvents,
    title: 'News & Events | Northfield University'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact | Northfield University'
  },
  {
    path: 'accessibility',
    component: Placeholder,
    title: 'Accessibility | Northfield University'
  },
  {
    path: '**',
    redirectTo: ''
  }
];