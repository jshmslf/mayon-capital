import { CommonModule } from '@angular/common';
import { Component, NgZone } from '@angular/core';
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

  constructor(private ngZone: NgZone) {}

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

    this.sending = true;

    // temporary emailjs using smtp
    const serviceID = "service_o661b1z";
    const templateID = "template_um22azj";
    const publicKey = "G1vUf2ab4IcxMQPWW";


    emailjs.send(serviceID, templateID, this.formData, publicKey)
      .then((response) => {
        this.ngZone.run(() => {
          console.log("Email sent via SSL!", response.status, response.text);
          this.submitted = true;
          this.showForm = false;
          this.formData = { name: '', phone: '', email: '', message: '' };
          this.errors = {};
          this.sending = false;
        });
      })
      .catch((error) => {
        this.ngZone.run(() => {
          console.error("Email sending failed", error);
          this.sending = false;
        });
      });
  }
}
