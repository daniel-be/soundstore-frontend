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
//Models
var user_1 = require('../models/user');
//Services
var user_service_1 = require('../services/user.service');
var RegisterComponent = (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.submitted = false;
        this.userModel = new user_1.User('', '');
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.signup(this.userModel)
            .subscribe(function (data) { return _this.httpStatus = data; }, function (error) { console.log(error); _this.httpStatus = error.status; }, function () { return console.log('Finished'); });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'my-register',
            templateUrl: './app/templates/register.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map