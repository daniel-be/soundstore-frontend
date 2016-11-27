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
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./components/app.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./modules/app-routing.module');
//Components
var song_detail_component_1 = require('./components/song-detail.component');
var dashboard_component_1 = require('./components/dashboard.component');
var register_component_1 = require('./components/register.component');
var album_detail_component_1 = require('./components/album-detail.component');
var cart_component_1 = require('./components/cart.component');
var login_component_1 = require('./components/login.component');
var account_detail_component_1 = require('./components/account-detail.component');
var song_search_component_1 = require('./components/song-search.component');
//Services
var song_service_1 = require('./services/song.service');
var album_service_1 = require('./services/album.service');
var user_service_1 = require('./services/user.service');
var cart_service_1 = require('./services/cart.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                song_detail_component_1.SongDetailComponent,
                dashboard_component_1.DashboardComponent,
                register_component_1.RegisterComponent,
                album_detail_component_1.AlbumDetailComponent,
                cart_component_1.CartComponent,
                login_component_1.LoginComponent,
                account_detail_component_1.AccountDetailComponent,
                song_search_component_1.SongSearchComponent
            ],
            providers: [
                song_service_1.SongService,
                album_service_1.AlbumService,
                user_service_1.UserService,
                cart_service_1.CartService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map