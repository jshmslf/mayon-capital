import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  showForm = false;
  submitted = false;

  formData = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };

  errors: Partial<typeof this.formData> = {};

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

    this.submitted = true;
    this.formData = { name: '', phone: '', email: '', message: '' };
    this.errors = {};
  }
}
