import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

//Models
import { User } from '../models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html'
})
export class AppComponent {
  private cartCount: number = 0;
  private loggedUser: User;
  private searchPattern: string;

  constructor(private cartService: CartService, private userService: UserService, private router: Router) { };

  ngOnInit() {
    this.cartService.getCartCount()
                    .subscribe(
                      (count: number) => this.cartCount=count
                    );
    this.userService.getLoggedUser()
                    .subscribe(
                      (user: User) => this.loggedUser=user
                    );
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  search(): void {
    let route = '/search/' + this.searchPattern;
    this.router.navigate([route]);
  }
}
