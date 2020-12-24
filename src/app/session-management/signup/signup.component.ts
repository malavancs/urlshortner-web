import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/service/loader.service';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  password: any;
  email: any;
  subsbriver: any;



  constructor(
    private authendicationService: AuthenticationService,
    private loaderService: LoaderService, private router: Router, private authService: SocialAuthService) { }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
   
    this.subsbriver = this.authService.authState.subscribe((user) => {
      if (user) {
        this.loaderService.show();
        const payload = {
          email: user.email,
          password: user.idToken,
          photoUrl: user.photoUrl,
          firstName: user.firstName,
          isGoogleSignIn: true
        };
        this.authendicationService.login(payload).subscribe((res: any) => {
          if (res) {


            this.router.navigate(['/links/myurls']);
          } else {
            alert('Wrong password');
          }
          this.loaderService.hide();
        }, ((err: any) => {
          this.loaderService.hide();
          alert(err.error.message);
        }));
      } else {
      }

    });
    this.loaderService.hide();
  }


  loginClicked(event) {
    this.loaderService.show();
    if (this.email && this.password) {
      const payload = {
        email: this.email, password: this.password
      };
      this.authendicationService.login(payload).subscribe((res: any) => {
        if (res) {
          this.router.navigate(['/links/myurls']);
        } else {
          alert('Wrong password');
        }
        this.loaderService.hide();
      }, ((err: any) => {
        this.loaderService.hide();
        alert(err.error.message);
      }));
    }

  }
  socialLogin(type) {
    switch (type) {
      case 'google':
        this.authendicationService.signInWithGoogle();
        break;
      case 'facebook':
        this.authendicationService.signInWithFacebook();
        break;
    }
  }

  passwordChanged(event) {
    this.password = event;
  }

  emailChanged(event) {
    this.email = event;

  }
  ngOnDestory() {
    this.subsbriver.unsubscribe();
  }
}
