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
var Subject_1 = require('rxjs/Subject');
var CartService = (function () {
    function CartService() {
        this.cart = [];
        this.cartCount = 0;
        this.cartCountSubject = new Subject_1.Subject();
    }
    CartService.prototype.add = function (item) {
        item.id = this.cart.length;
        this.cart.push(item);
        this.cartCount += 1;
        this.cartCountSubject.next(this.cartCount);
    };
    CartService.prototype.addAlbum = function (songs) {
        console.log(this.cart);
        for (var i = 0; i < songs.length; i++) {
            if (!this.inCart(songs[i].song_id)) {
                this.add(songs[i]);
            }
        }
    };
    CartService.prototype.remove = function (item) {
        this.cart = this.cart.filter(function (filterItem) { return filterItem.song_id !== item.song_id; });
        for (var i = 0; i < this.cart.length; i++) {
            this.cart[i].id = i;
        }
        this.cartCount -= 1;
        this.cartCountSubject.next(this.cartCount);
    };
    CartService.prototype.clear = function () {
        this.cart = [];
    };
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.isEmpty = function () {
        if (this.cart.length === 0) {
            return true;
        }
        return false;
    };
    CartService.prototype.getTotalPrice = function () {
        var total = 0;
        for (var i = 0; i < this.cart.length; i++) {
            total += +this.cart[i].price;
        }
        return total;
    };
    CartService.prototype.inCart = function (id) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].song_id === id) {
                return true;
            }
        }
        return false;
    };
    CartService.prototype.inCartAlbum = function (items) {
        for (var i = 0; i < items.length; i++) {
            if (!this.inCart(items[i].song_id)) {
                return false;
            }
        }
        return true;
    };
    CartService.prototype.getCartCount = function () {
        return this.cartCountSubject.asObservable();
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map