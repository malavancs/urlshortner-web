  import { Component, OnInit, Output, EventEmitter } from '@angular/core';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { LinksService } from '../service/links.service';
import { environment } from 'src/environments/environment';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

  @Component({
    selector: 'app-newurl',
    templateUrl: './newurl.component.html',
    styleUrls: ['./newurl.component.scss']
  })
  export class NewurlComponent implements OnInit {

    longUrl;
    shortUrl;
    @Output() newURLAdded = new EventEmitter();
    isGenerated = false;
    constructor(private linkService: LinksService, private sanitizer: DomSanitizer) { }

    cleanURL(oldURL ): SafeUrl {
      return   this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
      }
    ngOnInit() {

    }
    generateURL(event) {
      if (this.longUrl) {
        const payload = {
          longUrl: this.longUrl
        };
        this.linkService.createURL(payload).subscribe((res: any) => {
          console.log(res);
          this.shortUrl = `${environment.apiUrl}/u/${res.shortUrl.shortUrl}`;
          this.isGenerated = true;
          this.newURLAdded.emit(true);
        });
      }
    }
    longUrlChanged(value) {
      this.longUrl = value;
    }
  }
