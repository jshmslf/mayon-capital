import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-focus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './focus.html',
  styleUrls: ['./focus.css']
})
export class FocusComponent {
  focusItems = [
    {
      img: '/assets/deep_tech.png',
      title: 'Aerospace',
      desc: 'We back the pioneers redefining the limits of Earth and orbit. Our focus spans next-generation propulsion, satellite constellations, and autonomous flight systems—supporting the infrastructure that makes a multi-planetary future and a more connected world possible.'
    },
    {
      img: '/assets/machine.png',
      title: 'Supply Chain',
      desc: 'We invest in the invisible backbone of the global economy. By prioritizing AI-driven logistics, autonomous warehousing, and predictive resilience, we help founders transform fragmented legacy systems into intelligent, self-optimizing networks that move goods at the speed of software.'
    },
    {
      img: '/assets/infrastructure.png',
      title: 'Internet of Things',
      desc: 'We bridge the gap between the digital and physical worlds. We look for hardware and software breakthroughs that turn raw environmental data into actionable intelligence, fueling the rise of smart industrial ecosystems, edge computing, and hyper-connected cities.'
    }
  ];
}
