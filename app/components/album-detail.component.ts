import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

//Models
import { Album } from '../models/album';
import { Song } from '../models/song';
import { CartItem } from '../models/cartitem';

//Services
import { AlbumService } from '../services/album.service';
import { SongService } from '../services/song.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'my-album-detail',
  templateUrl: './app/templates/album-detail.component.html',
})
export class AlbumDetailComponent implements OnInit {
  private album: Album;
  private albumSongs: Song[];
  private foundSongsCount: number;
  private cartItemCount: number;
  private httpStatus: number;
  private price: number = 0;

  constructor(private cartService: CartService, private albumService: AlbumService, private songService: SongService, private route: ActivatedRoute, private location: Location) {  }

  ngOnInit() {
    this.getAlbum();
    this.getAlbumSongs();
  }

  getAlbum(): void {
    this.route.params
            .switchMap((params: Params) => this.albumService.getAlbum(+params['id']))
            .subscribe(
              data => this.album = data,
              error => console.log(error),
              () => console.log('Finished')
            );
  }

  getAlbumSongs() :void {
    this.route.params
            .switchMap((params: Params) => this.songService.getAlbumSongs(+params['id']))
            .subscribe(
              data => {this.albumSongs = data; this.foundSongsCount = data.length; this.calcPrice();},
              error => this.httpStatus=error.status,
              () => console.log('Finished')
            );
  }

  addAlbumToCart(): void {
    this.cartService.addAlbum(this.albumSongs as CartItem[])
  }

  addSongToCart(song: Song): void {
    this.cartService.add(song as CartItem);
    console.log(this.cartService.getCart());
  }

  inCart(id: number): boolean {
    return this.cartService.inCart(id);
  }

  inCartAlbum(): boolean {
    if(this.albumSongs){
      return this.cartService.inCartAlbum(this.albumSongs as CartItem[]);
    }
  }

  calcPrice(): void {
    for(let i = 0; i < this.foundSongsCount; i++){
      this.price += +this.albumSongs[i].price;
    }
  }
}
