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
var cart_service_1 = require('../services/cart.service');
var user_service_1 = require('../services/user.service');
var AppComponent = (function () {
    function AppComponent(cartService, userService, router) {
        this.cartService = cartService;
        this.userService = userService;
        this.router = router;
        this.cartCount = 0;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartService.getCartCount()
            .subscribe(function (count) { return _this.cartCount = count; });
        this.userService.getLoggedUser()
            .subscribe(function (user) { return _this.loggedUser = user; });
    };
    AppComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.search = function () {
        var route = '/search/' + this.searchPattern;
        this.router.navigate([route]);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/templates/app.component.html'
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService, user_service_1.UserService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map