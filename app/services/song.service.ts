import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';

import { Song } from '../models/song';

@Injectable()
export class SongService {
  private songUrl = 'http://192.168.178.31:3000/song';

  constructor(private http: Http) {  }

  getSong(id: number): Observable<Song> {
    return this.http.get(this.songUrl + '/' + id)
              .map((res: Response) => {console.log(res.json() as Song); return res.json().song as Song});
  }

  getDashboardSongs(): Observable<Song[]> {
    return this.http.get(this.songUrl + '/latest/6')
                .map((res: Response) => {console.log(res.json().songs); return res.json().songs as Song[]});
  }

  getAlbumSongs(id: number) :Observable<Song[]> {
    return this.http.get(this.songUrl + '/album/' + id)
                .map((res: Response) => res.json().songs as Song[]);

  }

  getSongs(pattern: string): Observable<Song[]> {
    return this.http.get(this.songUrl + '/search/' + pattern)
            .map((res: Response) => {console.log(res.json().songs); return res.json().songs as Song[]});
  }
}
