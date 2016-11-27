import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs';

//Models
import { Album } from '../models/album';

@Injectable()
export class AlbumService {
  private albumUrl = 'http://192.168.178.31:3000/album';

  constructor(private http: Http) {  }

  getDashboardAlbums(): Observable<Album[]> {
    return this.http.get(this.albumUrl + '/latest/6')
              .map((res: Response) => res.json().albums as Album[]);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get(this.albumUrl + '/' + id)
              .map((res: Response) => {console.log(res.json()); return res.json() as Album});
  }
}
