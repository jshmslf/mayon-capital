import { DOCUMENT, Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })
export class SeoService {
    constructor(
        private meta: Meta,
        private title: Title,
        @Inject(DOCUMENT) private doc: Document
    ) { }

    updateSeo(config: {
        title: string;
        description: string;
        keywords?: string;
        image?: string;
        url?: string;
    }) { 
        this.title.setTitle(config.title);

        this.meta.updateTag({ name: 'description', content: config.description })
        this.meta.updateTag({ name: 'keywords', content: config.keywords || '' })

        // Open Graph (Facebook, LinkedIn)
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image || '' });
        this.meta.updateTag({ property: 'og:url', content: config.url || '' });
        this.meta.updateTag({ property: 'og:type', content: 'website' });

        // Twitter Card
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image || '' });
    }

    setCanonicalUrl(url: string) {
        let link = this.doc.head.querySelector('link[rel="canonical"]') as HTMLLinkElement;
        if (!link) {
            link = this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.doc.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }

    setJsonLd(data: object) {
        // Remove existing JSON-LD
        const existing = this.doc.head.querySelector('script[type="application/ld+json"]');
        if (existing) existing.remove();

        const script = this.doc.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        this.doc.head.appendChild(script);
    }
}