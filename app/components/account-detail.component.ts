import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//Services
import { UserService } from '../services/user.service';

//Models
import { Address } from '../models/address';
import { Country } from '../models/country';


@Component({
  selector: 'my-account-detail',
  templateUrl: './app/templates/account-detail.component.html',
})
export class AccountDetailComponent implements OnInit {
  private address: Address;
  private httpStatus: number;
  private countries: Country[] = [];
  private formAddress: Address = new Address();
  private addStatus: number;

  constructor(private userService: UserService, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params
              .subscribe(
                (params: Params) => this.formAddress.email=params['email']
              );
    this.getAddress();
    this.getCountries();
  }

  getAddress(): void {
    this.route.params
            .switchMap((params: Params) => this.userService.getAddress(params['email']))
            .subscribe(
              data => this.address=data,
              error => this.httpStatus=error.status
            );
  }

  onSubmit(): void {
    this.formAddress.countryid = +this.formAddress.countryid;
    this.userService.setAddress(this.formAddress)
                    .subscribe(
                      data => this.addStatus=data
                    );
  }

  getCountries(): void {
    this.userService.getCountries()
                    .subscribe(
                      data => this.countries=data
                    );
  }
}
