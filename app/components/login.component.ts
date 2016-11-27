import { Component, OnInit } from '@angular/core';

//Services
import { UserService } from '../services/user.service';

//Models
import { User } from '../models/user';

@Component({
  selector: 'my-login',
  templateUrl: './app/templates/login.component.html',
})
export class LoginComponent implements OnInit {
  private userModel: User = new User('', '');

  constructor(private userService: UserService) {  }

  ngOnInit() {}

  onSubmit(): void{
    this.userService.login(this.userModel);
  }
}
