
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  submitForm(): void {
    this.submitted = true;
  }

  resetForm(): void {
    this.form = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.submitted = false;
  }
}