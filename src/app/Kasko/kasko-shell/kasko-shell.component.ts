import { Component, OnInit } from '@angular/core';
import { Page } from '../models/page.model';
import { Router } from '@angular/router';
import { LoadUser } from '../kasko.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-kasko-shell',
  templateUrl: './kasko-shell.component.html',
  styleUrls: ['./kasko-shell.component.css']
})
export class KaskoShellComponent implements OnInit {

  currentPage: Page = null;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new LoadUser());
  }

  onActivate(pageRef): void {
    // получить данные с сервера, передать в компонент, если что-то есть ...
    // реализовать метод "заполнить" в интерефейсе компонента
    this.currentPage = pageRef;
  }

  nextClick(): void {
    if (!this.currentPage) {
      return;
    }

    if (this.currentPage.isValid()) {
      // отправить на сервер данные и в случае успеха ...
      this.currentPage.nextRoute();
    } else {
      alert('Form invalid!');
    }
  }

}
