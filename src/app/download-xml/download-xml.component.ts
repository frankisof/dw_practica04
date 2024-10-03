import { Component } from '@angular/core';
import { XmlGeneratorService } from '../services/xml-generator.service';

@Component({
  selector: 'app-download-xml',
  templateUrl: './download-xml.component.html',
  styleUrls: ['./download-xml.component.css']
})
export class DownloadXmlComponent {
  constructor(private xmlGeneratorService: XmlGeneratorService) { }

  downloadXML(): void {
    const xmlContent = this.xmlGeneratorService.generateXML();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
