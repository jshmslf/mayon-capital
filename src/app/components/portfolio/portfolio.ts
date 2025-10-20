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
    { src: '/assets/logos/onflow.png', alt: 'OnFlow' },
    { src: '/assets/logos/farmatics.png', alt: 'Farmatics' },
    { src: '/assets/logos/knowz.png', alt: 'Knowz' },
    { src: '/assets/logos/mogo.png', alt: 'Mogo' },
    { src: '/assets/logos/mober.png', alt: 'Mober' },
    { src: '/assets/logos/feather-dynamics.png', alt: 'Feather Dynamics' },
    { src: '/assets/logos/wpl.png', alt: 'WPL' },
    { src: '/assets/logos/mayonventures.png', alt: 'Mayon Ventures' }
  ];
}
