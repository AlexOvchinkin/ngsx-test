import { User, Car } from './models/kasko.model';


export class LoadUser {
  static readonly type = '[KASKO USER] LOAD';
}

export class LoadUserSuccess {
  static readonly type = '[KASKO USER] LOAD SUCCESS';
  constructor(public payload: User) {}
}

export class LoadUserFail {
  static readonly type = '[KASKO USER] LOAD FAIL';
  constructor(public payload: string) {}
}


export class AddCar {
  static readonly type = '[KASKO CAR] ADD';
  constructor(public payload: Car) {}
}
