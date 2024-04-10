import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent {
  awsCloudPractionerCertificate: SafeHtml;
  awsRestartCertificate: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.awsCloudPractionerCertificate = this.sanitizer.bypassSecurityTrustHtml('<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6c677040-386e-4436-9673-cb846c66f77b" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="https://cdn.credly.com/assets/utilities/embed.js"></script>');
    this.awsRestartCertificate = this.sanitizer.bypassSecurityTrustHtml('<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="d24358b1-f44b-44f7-acf7-a7a363f43daf" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="https://cdn.credly.com/assets/utilities/embed.js"></script>');
  }
  handleDownload() {
    console.log("clicked")

  }
  

}

