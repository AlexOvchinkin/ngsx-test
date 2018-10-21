import { Component, OnInit } from '@angular/core';
import { Page } from '../models/page.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { AddCar } from '../kasko.actions';
import { Car } from '../models/kasko.model';
import { Observable } from 'rxjs';
import { KaskoState } from '../kasko.state';

@Component({
  selector: 'app-page-car-data',
  templateUrl: './page-car-data.component.html',
  styleUrls: ['./page-car-data.component.css']
})
export class PageCarDataComponent implements OnInit, Page {

  private _nextRoute = 'end';
  private formGroup: FormGroup;

  @Select(KaskoState.getCar) car$: Observable<Car>;

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      model: ['', Validators.required],
      mileage: ['', Validators.required]
    });

    this.car$.subscribe(car => {
      this.formGroup.patchValue(car);
    });
  }

  nextRoute(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(new AddCar(this.formGroup.value));
      this.router.navigate(['../', this._nextRoute], { relativeTo: this.route });
    }
  }

  isValid(): boolean {
    return this.formGroup.valid;
  }

}
