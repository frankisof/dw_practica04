import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlGeneratorService {

  constructor() { }

  generateXML(): string {
    const xmlContent = `
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
   <url>
        <loc>http://localhost:4200/juegos</loc>
        <lastmod>2024-09-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
        <image:image>
          <image:loc>http://localhost:4200/assets/images/Ocarina.png</image:loc>
          <image:title>Ocarina of Time</image:title>
        </image:image>
        <image:image>
          <image:loc>http://localhost:4200/assets/images/Wild.png"</image:loc>
          <image:title>Breath of the Wild</image:title>
        </image:image>
<image:image>
          <image:loc>http://localhost:4200/assets/images/Kingdom.png"</image:loc>
          <image:title>Tears of the Kingdom</image:title>
        </image:image>
<image:image>
          <image:loc>http://localhost:4200/assets/images/Kingdom-hero.png"</image:loc>
          <image:title>Ocarina of Time</image:title>
        </image:image>

      </url>      

<url>
        <loc>http://localhost:4200/juegos/ocarina-of-time</loc>
        <lastmod>2024-09-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
        <image:image>
          <image:loc>http://localhost:4200/assets/images/Ocarina.png</image:loc>
          <image:title>Ocarina of Time</image:title>
        </image:image>
      </url>
      <url>
        <loc>http://localhost:4200/juegos/breath-of-the-wild</loc>
        <lastmod>2024-09-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
        <image:image>
          <image:loc>http://localhost:4200/assets/images/Wild.png</image:loc>
          <image:title>Breath of the Wild</image:title>
        </image:image>
      </url>
      <url>
        <loc>http://localhost:4200/juegos/tears-of-the-kingdom</loc>
        <lastmod>2024-09-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
        <image:image>
          <image:loc>http://localhost:4200/assets/images/Kingdom.png</image:loc>
          <image:title>Tears of the Kingdom</image:title>
        </image:image>
      </url>
      <url>
        <loc>http://localhost:4200/juegos/download-xml</loc>
        <lastmod>2024-09-13</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
        <image:image>
          <image:loc>http://localhost:4200/assets/images/kingdom-hero.png</image:loc>
          <image:title>Descargar</image:title>
        </image:image>
      </url>
    </urlset>
    `;
    return xmlContent;
  }
}
