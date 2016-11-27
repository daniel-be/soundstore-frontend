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
var AlbumService = (function () {
    function AlbumService(http) {
        this.http = http;
        this.albumUrl = 'http://192.168.178.31:3000/album';
    }
    AlbumService.prototype.getDashboardAlbums = function () {
        return this.http.get(this.albumUrl + '/latest/6')
            .map(function (res) { return res.json().albums; });
    };
    AlbumService.prototype.getAlbum = function (id) {
        return this.http.get(this.albumUrl + '/' + id)
            .map(function (res) { console.log(res.json()); return res.json(); });
    };
    AlbumService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AlbumService);
    return AlbumService;
}());
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map