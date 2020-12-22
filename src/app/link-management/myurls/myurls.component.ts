import { Component, OnInit } from '@angular/core';
import { LinksService } from '../service/links.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-myurls',
  templateUrl: './myurls.component.html',
  styleUrls: ['./myurls.component.scss']
})
export class MyurlsComponent implements OnInit {

  myURLS = [];
  constructor(private linkService: LinksService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.refreshPage();
  }

  refreshPage() {
    this.linkService.fetchMyURLS().subscribe((res: any) => {
      this.myURLS = res.data;
    });
  }
  cleanURL(oldURL ): SafeUrl {
    return   this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/u/${oldURL}`);
    }
}
