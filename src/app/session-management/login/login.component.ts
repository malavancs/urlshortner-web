import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { LoaderService } from 'src/app/shared/service/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: any;
  email: any;
  subsbriver: any;

  constructor(
    private authendicationService: AuthenticationService,
    private loaderService: LoaderService, private router: Router, private authService: SocialAuthService) { }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    // if (localStorage !== null) {
    //   console.log('Is is here');
    //   this.router.navigate(['/links/myurls']);
    // }
    this.subsbriver = this.authService.authState.subscribe((user) => {
      console.log(user);
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
            console.log('Is is here1');

            this.router.navigate(['/links/myurls']);
          } else {
            alert('Wrong password');
          }
          this.loaderService.hide();
        }, ((err: any) => {
          this.loaderService.hide();
          console.log(err);
          alert(err.error.message);
        }));
      } else {
        console.log('I"m doing nothing');
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
          console.log('Is is her12e');

          this.router.navigate(['/links/myurls']);
        } else {
          alert('Wrong password');
        }
        this.loaderService.hide();
      }, ((err: any) => {
        this.loaderService.hide();
        console.log(err);
        alert(err.error.message);
      }));
    }

  }
  pressed(event) {

    this.authendicationService.signInWithGoogle();
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
