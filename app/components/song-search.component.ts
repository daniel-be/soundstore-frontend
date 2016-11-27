import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//Models
import { Song } from '../models/song';
import { CartItem } from '../models/cartitem';

//Services
import { SongService } from '../services/song.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'my-song-search',
  templateUrl: './app/templates/song-search.component.html',
})
export class SongSearchComponent implements OnInit {
  private foundSongs: Song[];
  private httpStatus: number;

  constructor(private songService: SongService, private route: ActivatedRoute, private cartService: CartService) {  }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    this.route.params
              .switchMap((params: Params) => this.songService.getSongs(params['pattern']))
              .subscribe(
                data => this.foundSongs=data,
                error => this.httpStatus=error.status
              );
  }

  addSongToCart(song: Song): void {
    this.cartService.add(song as CartItem);
    console.log(this.cartService.getCart());
  }

  inCart(id: number): boolean {
    return this.cartService.inCart(id);
  }
}
