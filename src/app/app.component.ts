import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ipData: any;
  browserData: any;

  constructor(private ipService: IpService) {}

  ngOnInit() {
    this.ipService.getIpInfo().subscribe(data => {
      this.ipData = data;
    });

    this.browserData = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${screen.width} x ${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      cookiesEnabled: navigator.cookieEnabled
    };
  }
}