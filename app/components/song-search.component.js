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
//Services
var song_service_1 = require('../services/song.service');
var cart_service_1 = require('../services/cart.service');
var SongSearchComponent = (function () {
    function SongSearchComponent(songService, route, cartService) {
        this.songService = songService;
        this.route = route;
        this.cartService = cartService;
    }
    SongSearchComponent.prototype.ngOnInit = function () {
        this.getSongs();
    };
    SongSearchComponent.prototype.getSongs = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.songService.getSongs(params['pattern']); })
            .subscribe(function (data) { return _this.foundSongs = data; }, function (error) { return _this.httpStatus = error.status; });
    };
    SongSearchComponent.prototype.addSongToCart = function (song) {
        this.cartService.add(song);
        console.log(this.cartService.getCart());
    };
    SongSearchComponent.prototype.inCart = function (id) {
        return this.cartService.inCart(id);
    };
    SongSearchComponent = __decorate([
        core_1.Component({
            selector: 'my-song-search',
            templateUrl: './app/templates/song-search.component.html',
        }), 
        __metadata('design:paramtypes', [song_service_1.SongService, router_1.ActivatedRoute, cart_service_1.CartService])
    ], SongSearchComponent);
    return SongSearchComponent;
}());
exports.SongSearchComponent = SongSearchComponent;
//# sourceMappingURL=song-search.component.js.map