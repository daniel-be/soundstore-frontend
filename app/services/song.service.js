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
var SongService = (function () {
    function SongService(http) {
        this.http = http;
        this.songUrl = 'http://192.168.178.31:3000/song';
    }
    SongService.prototype.getSong = function (id) {
        return this.http.get(this.songUrl + '/' + id)
            .map(function (res) { console.log(res.json()); return res.json().song; });
    };
    SongService.prototype.getDashboardSongs = function () {
        return this.http.get(this.songUrl + '/latest/6')
            .map(function (res) { console.log(res.json().songs); return res.json().songs; });
    };
    SongService.prototype.getAlbumSongs = function (id) {
        return this.http.get(this.songUrl + '/album/' + id)
            .map(function (res) { return res.json().songs; });
    };
    SongService.prototype.getSongs = function (pattern) {
        return this.http.get(this.songUrl + '/search/' + pattern)
            .map(function (res) { console.log(res.json().songs); return res.json().songs; });
    };
    SongService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SongService);
    return SongService;
}());
exports.SongService = SongService;
//# sourceMappingURL=song.service.js.map