import { CommonModule } from '@angular/common';
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
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

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  handleButtonClick() {
    this.showForm = true;
    this.submitted = false;
  }

  handleCancel() {
    this.showForm = false;
    this.formData = { name: '', phone: '', email: '', message: '' };
    this.errors = {};
  }

  validate() {
    const newErrors: Partial<typeof this.formData> = {};
    if (!this.formData.name.trim()) newErrors.name = 'Please fill in this required field';
    if (!this.formData.email.trim()) newErrors.email = 'Please fill in this required field';
    else if (!/\S+@\S+\.\S+/.test(this.formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!this.formData.message.trim())
      newErrors.message = 'Please fill in this required field';
    return newErrors;
  }

handleSubmit(event: Event) {
  event.preventDefault();

  const validationErrors = this.validate();
  if (Object.keys(validationErrors).length > 0) {
    this.errors = validationErrors;
    return;
  }

  console.log('Before send - sending:', this.sending);
  this.sending = true;
  console.log('After setting true - sending:', this.sending);

  const serviceID = "service_o661b1z";
  const templateID = "template_um22azj";
  const publicKey = "G1vUf2ab4IcxMQPWW";

  emailjs.send(serviceID, templateID, this.formData, publicKey)
    .then((response) => {
      console.log("Email sent successfully!", response.status, response.text);
      console.log('Before ngZone - sending:', this.sending, 'submitted:', this.submitted, 'showForm:', this.showForm);
      
      this.ngZone.run(() => {
        console.log('Inside ngZone.run - setting states');
        this.sending = false;
        this.submitted = true;
        this.showForm = false;
        this.formData = { name: '', phone: '', email: '', message: '' };
        this.errors = {};
        console.log('After setting - sending:', this.sending, 'submitted:', this.submitted, 'showForm:', this.showForm);
        this.cdr.detectChanges(); // Force change detection
      });

      // Check after ngZone completes
      setTimeout(() => {
        console.log('After ngZone completed - sending:', this.sending, 'submitted:', this.submitted, 'showForm:', this.showForm);
      }, 100);
    })
    .catch((error) => {
      this.ngZone.run(() => {
        console.error("Email sending failed:", error);
        this.sending = false;
        alert("Something went wrong. Please try again later.");
      });
    });
}
}
