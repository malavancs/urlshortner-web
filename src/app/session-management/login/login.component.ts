import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authendicationService: AuthenticationService) { }

  ngOnInit() {
  }


  loginClicked(event) {
    this.authendicationService.login('mlvnhari@gmail.com', '12345678').subscribe((res: any) => {
      console.log(res);
    })
  }
}
