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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var Subject_1 = require('rxjs/Subject');
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.userUrl = 'http://192.168.178.31:3000/user';
        this.loggedSubject = new Subject_1.Subject();
    }
    UserService.prototype.signup = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.userUrl + '/register', user, options)
            .map(function (res) { console.log(res.status); return res.status; });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(this.userUrl + '/login', user, options)
            .map(function (res) { console.log(res.json()); return res.json(); })
            .subscribe(function (data) {
            if (data.status === 200) {
                localStorage.setItem("currentUser", user.email);
                _this.setLoggedUser(user);
                _this.router.navigate(['/']);
                return true;
            }
            else {
                return false;
            }
        });
        return false;
    };
    UserService.prototype.setLoggedUser = function (user) {
        this.loggedUser = user;
        this.loggedSubject.next(user);
    };
    UserService.prototype.getLoggedUser = function () {
        return this.loggedSubject.asObservable();
    };
    UserService.prototype.loggedIn = function () {
        if (this.loggedUser) {
            return true;
        }
        return false;
    };
    UserService.prototype.logout = function () {
        this.setLoggedUser(null);
        this.router.navigate(['/login']);
    };
    UserService.prototype.checkCredentials = function () {
        if (!this.loggedUser) {
            this.router.navigate(['/login']);
        }
    };
    UserService.prototype.getAddress = function (email) {
        return this.http.get(this.userUrl + '/billingaddress/' + email)
            .map(function (res) { console.log(res.json().address); return res.json().address; });
    };
    UserService.prototype.getLoggedAddress = function () {
        console.log(this.loggedUser.email);
        return this.http.get(this.userUrl + '/billingaddress/' + this.loggedUser.email)
            .map(function (res) { console.log(res.json().address); return res.json().address; });
    };
    UserService.prototype.setAddress = function (address) {
        console.log(address);
        console.log("fk");
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.userUrl + '/addbillingaddress', address, options)
            .map(function (res) { console.log(res.status); return res.status; });
    };
    UserService.prototype.getCountries = function () {
        return this.http.get(this.userUrl + '/countries')
            .map(function (res) { console.log(res.json().countries); return res.json().countries; });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map