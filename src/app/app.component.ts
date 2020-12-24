import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urlshortner-web';
  userData;
  url;
  isLoggedIn = false;
  constructor(private router: Router, private authService: SocialAuthService) {
    router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        this.userData = JSON.parse(localStorage.getItem('currentUser'));
        this.isLoggedIn = this.userData !== null;
        if (this.userData) {

          this.url = this.userData.findUser.photourl;
        }
      }
    });
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
    this.isLoggedIn = this.userData !== null;
    if (this.userData) {
      this.url = this.userData.findUser.photourl;
    }
  }
  async logout() {
    await this.authService.signOut().then((res: any) => {

    }).catch((error: any) => {
    });
    localStorage.removeItem('currentUser');

    this.router.navigate(['/login']);
  }
}
