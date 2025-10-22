import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css']
})
export class PortfolioComponent {
  portfolioItems = [
    { src: './onflow.png', alt: 'OnFlow' },
    { src: './farmatics.png', alt: 'Farmatics' },
    { src: './knowz.png', alt: 'Knowz' },
    { src: './mogo.png', alt: 'Mogo' },
    { src: './mober.png', alt: 'Mober' },
    { src: './feather-dynamics.png', alt: 'Feather Dynamics' },
    { src: './wpl.png', alt: 'WPL' },
    { src: './mayonventures.png', alt: 'Mayon Ventures' }
  ];
}
