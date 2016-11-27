"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
//Services
var album_service_1 = require('../services/album.service');
var song_service_1 = require('../services/song.service');
var cart_service_1 = require('../services/cart.service');
var AlbumDetailComponent = (function () {
    function AlbumDetailComponent(cartService, albumService, songService, route, location) {
        this.cartService = cartService;
        this.albumService = albumService;
        this.songService = songService;
        this.route = route;
        this.location = location;
        this.price = 0;
    }
    AlbumDetailComponent.prototype.ngOnInit = function () {
        this.getAlbum();
        this.getAlbumSongs();
    };
    AlbumDetailComponent.prototype.getAlbum = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.albumService.getAlbum(+params['id']); })
            .subscribe(function (data) { return _this.album = data; }, function (error) { return console.log(error); }, function () { return console.log('Finished'); });
    };
    AlbumDetailComponent.prototype.getAlbumSongs = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.songService.getAlbumSongs(+params['id']); })
            .subscribe(function (data) { _this.albumSongs = data; _this.foundSongsCount = data.length; _this.calcPrice(); }, function (error) { return _this.httpStatus = error.status; }, function () { return console.log('Finished'); });
    };
    AlbumDetailComponent.prototype.addAlbumToCart = function () {
        this.cartService.addAlbum(this.albumSongs);
    };
    AlbumDetailComponent.prototype.addSongToCart = function (song) {
        this.cartService.add(song);
        console.log(this.cartService.getCart());
    };
    AlbumDetailComponent.prototype.inCart = function (id) {
        return this.cartService.inCart(id);
    };
    AlbumDetailComponent.prototype.inCartAlbum = function () {
        if (this.albumSongs) {
            return this.cartService.inCartAlbum(this.albumSongs);
        }
    };
    AlbumDetailComponent.prototype.calcPrice = function () {
        for (var i = 0; i < this.foundSongsCount; i++) {
            this.price += +this.albumSongs[i].price;
        }
    };
    AlbumDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-album-detail',
            templateUrl: './app/templates/album-detail.component.html',
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, album_service_1.AlbumService, song_service_1.SongService, router_1.ActivatedRoute, common_1.Location])
    ], AlbumDetailComponent);
    return AlbumDetailComponent;
}());
exports.AlbumDetailComponent = AlbumDetailComponent;
//# sourceMappingURL=album-detail.component.js.map