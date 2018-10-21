import { Component, OnInit } from '@angular/core';
import { Page } from '../models/page.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { LoadUser, LoadUserSuccess } from '../kasko.actions';
import { KaskoState } from '../kasko.state';
import { Observable } from 'rxjs';
import { User } from '../models/kasko.model';

@Component({
  selector: 'app-page-user-data',
  templateUrl: './page-user-data.component.html',
  styleUrls: ['./page-user-data.component.css']
})
export class PageUserDataComponent implements OnInit, Page {

  private _nextRoute = 'step2';
  private formGroup: FormGroup;

  @Select(KaskoState.getUser) user$: Observable<User>;

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required]
    });

    this.user$.subscribe(user => {
      this.formGroup.patchValue(user);
    });
  }

  nextRoute(): void {
    if (this.formGroup.valid) {
      this.store.dispatch(new LoadUserSuccess(this.formGroup.value));
      this.router.navigate(['../', this._nextRoute], { relativeTo: this.route });
    }
  }

  isValid(): boolean {
    return this.formGroup.valid;
  }

}
