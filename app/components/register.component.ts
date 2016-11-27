import { Component, OnInit } from '@angular/core';

//Models
import { User} from '../models/user';

//Services
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-register',
  templateUrl: './app/templates/register.component.html',
})
export class RegisterComponent implements OnInit {
  private submitted = false;
  private userModel = new User('', '');
  private httpStatus: number;

  constructor(private userService: UserService) {  }

  ngOnInit() { }

  onSubmit(): void {
    this.userService.signup(this.userModel)
              .subscribe(
                data => this.httpStatus = data,
                error => {console.log(error); this.httpStatus=error.status},
                () => console.log('Finished')
              );
  }
}
