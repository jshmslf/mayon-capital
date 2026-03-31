import { Component, OnInit, signal } from '@angular/core';
import { Header } from "./components/header/header"
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { FocusComponent } from './components/focus/focus';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ContactComponent } from './components/contact/contact';
import { CommonModule } from '@angular/common';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Footer, Hero, FocusComponent, PortfolioComponent, ContactComponent],
  templateUrl: './app.html',
styleUrls: ['./app.css']

  
})
export class App implements OnInit{
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Mayon Capital',
      description: "Mayon Capital is a premier venture capital firm at the forefront of Artificial Intelligence (AI) and Machine Learning (ML) innovation. We specialize in backing early-stage startups that are developing transformative technologies to solve the world's most complex challenges. We provide more than just seed funding; we offer the strategic guidance and industry connectivity necessary to scale bold ideas into market-leading companies. Our mission is to empower pioneering founders by bridging the gap between breakthrough research and commercial success.",
      keywords: 'AI Venture Capital, Machine Learning Investors, Early-Stage AI Startups, Technology Investment, AI Innovation Funding, Deep Tech Seed Funding, Early-stage VC, Aerospace Startups VC, Defense Tech Investment, VC for Robotics Founders, Scale AI Startup',
      image: 'https://mayoncapital.com/assets/mayon-metapic.png',
      url: 'https://mayoncapital.com/'
    });

    this.seo.setCanonicalUrl('https://mayoncapital.com');

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://mayoncapital.com/#website',
          url: 'https://mayoncapital.com',
          name: 'Mayon Capital',
          description: "Mayon Capital is a premier venture capital firm at the forefront of AI and ML innovation, backing early-stage startups developing transformative technologies."
        },
        {
          '@type': 'WebPage',
          '@id': 'https://mayoncapital.com/#webpage',
          url: 'https://mayoncapital.com',
          name: 'Mayon Capital | AI & ML Venture Capital',
          description: "Mayon Capital backs early-stage startups at the forefront of AI, ML, Aerospace, Robotics, and Deep Tech.",
          isPartOf: { '@id': 'https://mayoncapital.com/#website' }
        },
        {
          '@type': 'Organization',
          '@id': 'https://mayoncapital.com/#organization',
          name: 'Mayon Capital',
          url: 'https://mayoncapital.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://mayoncapital.com/assets/mayon-metapic.png'
          },
          description: "A premier venture capital firm specializing in AI and ML innovation, empowering early-stage founders to scale breakthrough technologies into market-leading companies.",
          founder: {
            '@type': 'Person',
            name: 'Rhandal Sayat',
            jobTitle: 'Chief Executive Officer',
            worksFor: { '@id': 'https://mayoncapital.com/#organization' }
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Investor Relations',
            email: 'invest@mayoncapital.com',
            availableLanguage: 'English'
          },
          sameAs: [
            'https://www.linkedin.com/company/mayoncapital'
          ]
        }
      ]
    });
  }
}
