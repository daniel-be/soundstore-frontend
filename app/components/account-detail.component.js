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
var user_service_1 = require('../services/user.service');
//Models
var address_1 = require('../models/address');
var AccountDetailComponent = (function () {
    function AccountDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.countries = [];
        this.formAddress = new address_1.Address();
    }
    AccountDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) { return _this.formAddress.email = params['email']; });
        this.getAddress();
        this.getCountries();
    };
    AccountDetailComponent.prototype.getAddress = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getAddress(params['email']); })
            .subscribe(function (data) { return _this.address = data; }, function (error) { return _this.httpStatus = error.status; });
    };
    AccountDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.formAddress.countryid = +this.formAddress.countryid;
        this.userService.setAddress(this.formAddress)
            .subscribe(function (data) { return _this.addStatus = data; });
    };
    AccountDetailComponent.prototype.getCountries = function () {
        var _this = this;
        this.userService.getCountries()
            .subscribe(function (data) { return _this.countries = data; });
    };
    AccountDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-account-detail',
            templateUrl: './app/templates/account-detail.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], AccountDetailComponent);
    return AccountDetailComponent;
}());
exports.AccountDetailComponent = AccountDetailComponent;
//# sourceMappingURL=account-detail.component.js.map