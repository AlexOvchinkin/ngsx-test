import { Component, OnInit } from '@angular/core';
import { Page } from '../models/page.model';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Car, User } from '../models/kasko.model';
import { LoadUser } from '../kasko.actions';

@Component({
  selector: 'app-page-data-confirm',
  templateUrl: './page-data-confirm.component.html',
  styleUrls: ['./page-data-confirm.component.css']
})
export class PageDataConfirmComponent implements OnInit, Page {

  private _nextRoute = '';
  car: Car;
  user: User;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    this.store.subscribe(data => {
      this.user = data.Kasko.user;
      this.car = data.Kasko.car;
    });
  }

  nextRoute(): void {
    alert('Successful');
    this.router.navigate([this._nextRoute]);
  }

  isValid(): boolean {
    if (this.user && this.user.name && this.user.surname
      && this.car && this.car.mileage && this.car.model) {
      return true;
    }

    return false;
  }



}
