import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header"
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { FocusComponent } from './components/focus/focus';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ContactComponent } from './components/contact/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Footer, Hero, FocusComponent, PortfolioComponent, ContactComponent],
  templateUrl: './app.html',
styleUrls: ['./app.css']

  
})
export class App {
}
