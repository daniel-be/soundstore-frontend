import '../rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../components/app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

//Components
import { SongDetailComponent } from '../components/song-detail.component';
import { DashboardComponent} from '../components/dashboard.component';
import { RegisterComponent } from '../components/register.component';

//Services
import { SongService } from '../services/song.service';
import { AlbumService } from '../services/album.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SongDetailComponent,
    DashboardComponent,
    RegisterComponent
  ],
  providers: [ SongService, AlbumService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
