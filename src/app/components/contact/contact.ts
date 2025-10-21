import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  faCheckCircle = faCheckCircle;
  showForm = false;
  submitted = false;
  sending = false;

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  errors: Partial<typeof this.formData> = {};

  constructor(private ngZone: NgZone) {}

  handleButtonClick() {
    this.showForm = true;
    this.submitted = false;
    this.errors = {};
  }

  handleCancel() {
    this.resetForm();
    this.showForm = false;
  }

  /** Form validation logic */
  private validate(): Partial<typeof this.formData> {
    const newErrors: Partial<typeof this.formData> = {};

    if (!this.formData.name.trim()) {
      newErrors.name = 'Please fill in this required field';
    }

    if (!this.formData.email.trim()) {
      newErrors.email = 'Please fill in this required field';
    } else if (!/\S+@\S+\.\S+/.test(this.formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!this.formData.message.trim()) {
      newErrors.message = 'Please fill in this required field';
    }

    return newErrors;
  }

  /** Sends the form via EmailJS */
  handleSubmit(event: Event) {
    event.preventDefault();

    const validationErrors = this.validate();
    if (Object.keys(validationErrors).length > 0) {
      this.errors = validationErrors;
      return;
    }

    this.sending = true;
    this.errors = {};

    const serviceID = 'service_o661b1z';
    const templateID = 'template_um22azj';
    const publicKey = 'G1vUf2ab4IcxMQPWW';

    emailjs.send(serviceID, templateID, this.formData, publicKey)
      .then(() => {
        this.ngZone.run(() => {
          this.sending = false;
          this.submitted = true;
          this.showForm = false;
          this.resetForm();
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        this.ngZone.run(() => {
          this.sending = false;
          alert('Something went wrong. Please try again later.');
        });
      });
  }

  /** Utility: clears all form data and validation */
  private resetForm() {
    this.formData = { name: '', phone: '', email: '', message: '' };
    this.errors = {};
  }
}
