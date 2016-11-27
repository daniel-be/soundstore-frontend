import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';

//Components
import { SongDetailComponent } from './components/song-detail.component';
import { DashboardComponent} from './components/dashboard.component';
import { RegisterComponent } from './components/register.component';
import { AlbumDetailComponent } from './components/album-detail.component';
import { CartComponent } from './components/cart.component';
import { LoginComponent } from './components/login.component';
import { AccountDetailComponent } from './components/account-detail.component';
import { SongSearchComponent } from './components/song-search.component';

//Services
import { SongService } from './services/song.service';
import { AlbumService } from './services/album.service';
import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SongDetailComponent,
    DashboardComponent,
    RegisterComponent,
    AlbumDetailComponent,
    CartComponent,
    LoginComponent,
    AccountDetailComponent,
    SongSearchComponent
  ],
  providers: [
    SongService,
    AlbumService,
    UserService,
    CartService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
