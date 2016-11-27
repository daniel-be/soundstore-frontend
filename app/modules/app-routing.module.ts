import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Components
import { DashboardComponent } from '../components/dashboard.component';
import { SongDetailComponent } from '../components/song-detail.component';
import { RegisterComponent } from '../components/register.component';
import { AlbumDetailComponent } from '../components/album-detail.component';
import { CartComponent } from '../components/cart.component';
import { LoginComponent } from '../components/login.component';
import { AccountDetailComponent } from '../components/account-detail.component';
import { SongSearchComponent } from '../components/song-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'song/:id', component: SongDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'album/:id', component: AlbumDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account/:email', component: AccountDetailComponent },
  { path: 'search/:pattern', component: SongSearchComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
