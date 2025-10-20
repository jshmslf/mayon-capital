import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  heroBackground = {
    'background-image': `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${this.getBackgroundUrl()}')`,
    'background-size': 'cover',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-attachment': 'fixed'
  };

  getBackgroundUrl() {
    return '/background.png';
  }

}
