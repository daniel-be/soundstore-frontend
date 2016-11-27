import { Component, OnInit } from '@angular/core';

//Models
import { CartItem } from '../models/cartitem';
import { User } from '../models/user';

//Services
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'my-cart',
  templateUrl: './app/templates/cart.component.html',
})
export class CartComponent implements OnInit {
  private cart: CartItem[];
  private submitted: boolean = false;
  private totalPrice: number;
  private availAddress: boolean = false;

  constructor(private cartService: CartService, private userService: UserService) {  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.getTotalPrice();
    if(this.loggedIn()){
      this.addressFound();
    }
  }

  removeItem(item: CartItem): void {
    this.cartService.remove(item);
    this.cart = this.cartService.getCart();
    this.getTotalPrice();
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty();
  }

  loggedIn(): boolean {
    if(this.userService.loggedIn()){
      return true;
    }
    return false;
  }

  onSubmit(): void {
    this.submitted = true;
  }

  addressFound(): void {
    this.userService.getLoggedAddress()
                    .subscribe(
                      data => {console.log(data); this.availAddress=true},
                      error => console.log(error)
                    );
  }

  getTotalPrice(): void {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
