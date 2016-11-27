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
//Services
var cart_service_1 = require('../services/cart.service');
var user_service_1 = require('../services/user.service');
var CartComponent = (function () {
    function CartComponent(cartService, userService) {
        this.cartService = cartService;
        this.userService = userService;
        this.submitted = false;
        this.availAddress = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cart = this.cartService.getCart();
        this.getTotalPrice();
        if (this.loggedIn()) {
            this.addressFound();
        }
    };
    CartComponent.prototype.removeItem = function (item) {
        this.cartService.remove(item);
        this.cart = this.cartService.getCart();
        this.getTotalPrice();
    };
    CartComponent.prototype.isEmpty = function () {
        return this.cartService.isEmpty();
    };
    CartComponent.prototype.loggedIn = function () {
        if (this.userService.loggedIn()) {
            return true;
        }
        return false;
    };
    CartComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    CartComponent.prototype.addressFound = function () {
        var _this = this;
        this.userService.getLoggedAddress()
            .subscribe(function (data) { console.log(data); _this.availAddress = true; }, function (error) { return console.log(error); });
    };
    CartComponent.prototype.getTotalPrice = function () {
        this.totalPrice = this.cartService.getTotalPrice();
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'my-cart',
            templateUrl: './app/templates/cart.component.html',
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, user_service_1.UserService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map