import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';

//Models
import { User } from '../models/user';
import { Address } from '../models/address';
import { Country } from '../models/country';

@Injectable()
export class UserService {
  private userUrl = 'http://192.168.178.31:3000/user';
  private loggedUser: User;
  private loggedSubject: Subject<User> = new Subject<User>();

  constructor(private http: Http, private router: Router) {  }

  signup(user: User): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.userUrl + '/register', user, options)
            .map((res: Response) => { console.log(res.status); return res.status});
  }

  login(user: User): boolean {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(this.userUrl + '/login', user, options)
          .map((res: Response) => {console.log(res.json()); return res.json()})
          .subscribe(
            data => {
              if(data.status===200){
                localStorage.setItem("currentUser", user.email);
                this.setLoggedUser(user);
                this.router.navigate(['/']);
                return true;
              }
              else{
                return false;
              }
            }
          );
    return false;
  }

  setLoggedUser(user: User): void{
    this.loggedUser = user;
    this.loggedSubject.next(user);
  }

  getLoggedUser(): Observable<User> {
    return this.loggedSubject.asObservable();
  }

  loggedIn(): boolean {
    if(this.loggedUser){
      return true;
    }
    return false;
  }

  logout(): void {
    this.setLoggedUser(null);
    this.router.navigate(['/login']);
  }

  checkCredentials(): void {
    if(!this.loggedUser){
      this.router.navigate(['/login']);
    }
  }

  getAddress(email: string): Observable<Address> {
    return this.http.get(this.userUrl + '/billingaddress/' + email)
                    .map((res: Response) => {console.log(res.json().address as Address); return res.json().address as Address;});
  }

  getLoggedAddress(): Observable<Address> {
    console.log(this.loggedUser.email);
    return this.http.get(this.userUrl + '/billingaddress/' + this.loggedUser.email)
                    .map((res: Response) => {console.log(res.json().address as Address); return res.json().address as Address;});
  }

  setAddress(address: Address): Observable<any> {
    console.log(address);
    console.log("fk");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.userUrl + '/addbillingaddress', address, options)
            .map((res: Response) => { console.log(res.status); return res.status});
  }

  getCountries(): Observable<Country[]> {
    return this.http.get(this.userUrl + '/countries')
                    .map((res: Response) => {console.log(res.json().countries as Country[]); return res.json().countries as Country[];});
  }
}
