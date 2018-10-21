import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/kasko.model';

@Injectable({
  providedIn: 'root'
})
export class KaskoService {

  constructor() { }

  getUser(): Observable<User> {
    return of({ name: 'Alex', surname: 'Ovchinkin' });
  }
}
