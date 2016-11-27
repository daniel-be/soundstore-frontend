import { Component, OnInit } from '@angular/core';

//Models
import { Album } from '../models/album';

//Services
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './app/templates/dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private dashboardAlbums: Album[]

  constructor(private albumService: AlbumService) {  }

  ngOnInit() {
    this.getDashboardSongs();
  }

  getDashboardSongs(): void {
    this.albumService.getDashboardAlbums()
                    .subscribe(
                      data => this.dashboardAlbums = data,
                      error => console.log(error),
                      () => console.log('Finished')
                    )
  }
}
