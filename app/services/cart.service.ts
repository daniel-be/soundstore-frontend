import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';

//Models
import { CartItem } from '../models/cartitem';
import { Song } from '../models/song';

@Injectable()
export class CartService {
  private cart: CartItem[] = [];
  private cartCount: number = 0;
  private cartCountSubject: Subject<number> = new Subject<number>();

  constructor() {  }

  add(item: CartItem): void {
    item.id = this.cart.length;
    this.cart.push(item);
    this.cartCount += 1;
    this.cartCountSubject.next(this.cartCount);
  }

  addAlbum(songs: CartItem[]): void {
    console.log(this.cart);
    for(let i = 0; i < songs.length; i++){
      if(!this.inCart(songs[i].song_id)){
        this.add(songs[i]);
      }
    }
  }

  remove(item: CartItem): void {
    this.cart = this.cart.filter(filterItem => filterItem.song_id !== item.song_id);
    for(let i=0; i < this.cart.length; i++){
      this.cart[i].id = i;
    }
    this.cartCount -= 1;
    this.cartCountSubject.next(this.cartCount);
  }

  clear(): void {
    this.cart = [];
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  isEmpty(): boolean {
    if(this.cart.length === 0){
      return true;
    }
    return false;
  }

  getTotalPrice(): number{
    let total = 0;
    for(let i = 0; i < this.cart.length; i++){
      total += +this.cart[i].price;
    }
    return total;
  }

  inCart(id: number): boolean {
    for(let i=0; i < this.cart.length; i++){
      if(this.cart[i].song_id===id){
        return true;
      }
    }
    return false;
  }

  inCartAlbum(items: CartItem[]): boolean {
    for(let i=0; i < items.length; i++){
      if(!this.inCart(items[i].song_id)){
        return false;
      }
    }
    return true;
  }

  getCartCount(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }
}
