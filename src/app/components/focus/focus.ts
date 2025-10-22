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
      img: './deep_tech.png',
      title: 'Deep Tech',
      desc: 'We remain at the forefront of driving innovation in the domain of AI/ML, Aerospace, Robotics, MedTech, FarmTech, Biotech and Web3.0, continually propelling these fields forward.'
    },
    {
      img: './wealth.png',
      title: 'Wealth',
      desc: 'Our astute investment methodology has proven to be a potent catalyst for a substantial enhancement in the net worth of our valued partners, achieving remarkable results in a remarkably brief span of time.'
    },
    {
      img: './infrastructure.png',
      title: 'Infrastructure',
      desc: 'We boast a well-diversified portfolio of infrastructure projects spanning the globe, encompassing a wide spectrum of ventures such as communication infrastructure, commercial development and housing projects.'
    }
  ];
}
