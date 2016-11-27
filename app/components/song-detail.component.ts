import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

//Models
import { Song } from '../models/song';
import { CartItem } from '../models/cartitem';

//Services
import { SongService } from '../services/song.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'my-song-detail',
  templateUrl: './app/templates/song-detail.component.html',
})
export class SongDetailComponent implements OnInit {
  private song: Song;

  constructor(private songService: SongService, private route: ActivatedRoute, private location: Location, private cartService: CartService) { }

  ngOnInit() {
    this.route.params
          .switchMap((params: Params) => this.songService.getSong(+params['id']))
          .subscribe(
            data => this.song = data,
            error => console.log(error),
            () => console.log('Finished')
          );
  }

  addToCart(song: Song): void {
    this.cartService.add(song as CartItem);
    console.log(this.cartService.getCart());
  }

  inCart(id: number): boolean {
    return this.cartService.inCart(id);
  }
}
