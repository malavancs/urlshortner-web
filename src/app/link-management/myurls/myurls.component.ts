import { Component, OnInit } from '@angular/core';
import { LinksService } from '../service/links.service';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { NewurlComponent } from '../newurl/newurl.component';
import { LoaderService } from 'src/app/shared/service/loader.service';

@Component({
  selector: 'app-myurls',
  templateUrl: './myurls.component.html',
  styleUrls: ['./myurls.component.scss']
})
export class MyurlsComponent implements OnInit {

  myURLS = [];
  constructor(
    private linkService: LinksService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog,
    private loaderService: LoaderService) { }

  ngOnInit() {
    this.refreshPage();
  }

  refreshPage() {
    this.loaderService.show();
    this.linkService.fetchMyURLS().subscribe((res: any) => {
      this.myURLS = res.data;
      this.myURLS.forEach((ele: any) => {
        ele.shortUrl = `malavan.tech/u/${ele.shortUrl}`;
        ele.createdAt = this.timeSince(ele.createdAt);
      });
      this.loaderService.hide();
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewurlComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
  }
  cleanURL(oldURL): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${environment.apiUrl}/u/${oldURL}`);
  }
  timeSince(date) {
    date = new Date(date);
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;

    const suffix = ' ago';

    const elapsed = Math.floor((Date.now() - date) / 1000);

    if (elapsed < minute) {
      return 'just now';
    }

    // get an array in the form of [number, string]
    const a = elapsed < hour && [Math.floor(elapsed / minute), 'minute'] ||
      elapsed < day && [Math.floor(elapsed / hour), 'hour'] ||
      elapsed < month && [Math.floor(elapsed / day), 'day'] ||
      elapsed < year && [Math.floor(elapsed / month), 'month'] ||
      [Math.floor(elapsed / year), 'year'];

    // pluralise and append suffix
    return a[0] + ' ' + a[1] + (a[0] === 1 ? '' : 's') + suffix;
  }
}
