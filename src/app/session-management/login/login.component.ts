import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: any;
  email: any;

  constructor(private authendicationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    if (localStorage !== null) {
      this.router.navigate(['/links/myurls']);
    }
  }


  loginClicked(event) {
    if (this.email && this.password) {
      this.authendicationService.login(this.email, this.password).subscribe((res: any) => {
        if (res) {
          this.router.navigate(['/links/myurls']);
        } else {
          alert('Wrong password');
        }
      }, ((err: any) => {
        console.log(err);
        alert(err.error.message);
      }));
    }

  }
  pressed(event){
    this.authendicationService.signInWithGoogle();
  }

  passwordChanged(event) {
    this.password = event;
  }

  emailChanged(event) {
    this.email = event;

  }
}
