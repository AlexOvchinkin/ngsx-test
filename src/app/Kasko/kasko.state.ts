import { State, Action, StateContext, Selector } from '@ngxs/store';
import { User, Car } from './models/kasko.model';
import { LoadUser, AddCar, LoadUserSuccess, LoadUserFail } from './kasko.actions';
import { KaskoService } from './kasko.service';
import { mergeMap, map, catchError, delay } from 'rxjs/operators';

export class KaskoStateModel {
  user: User;
  car: Car;
}

@State<KaskoStateModel>({
  name: 'Kasko',
  defaults: {
    user: { name: '', surname: '' },
    car: { model: '', mileage: 0 }
  }
})
export class KaskoState {

  constructor(private kaskoService: KaskoService) { }

  @Selector()
  static getUser(state: KaskoStateModel) {
    return state.user;
  }

  @Selector()
  static getCar(state: KaskoStateModel) {
    return state.car;
  }

  @Action(LoadUser)
  loadUser({ dispatch }: StateContext<KaskoStateModel>) {
    this.kaskoService.getUser()
      .pipe(delay(2000))
      .subscribe(
        (user: User) => dispatch(new LoadUserSuccess(user)),
        err => dispatch(new LoadUserFail(err))
      );
  }

  @Action(LoadUserSuccess)
  loadUserSuccess({ patchState }: StateContext<KaskoStateModel>, { payload }: LoadUserSuccess) {
    patchState({
      user: payload
    });
  }

  @Action(LoadUserFail)
  loadUserFail(stateContext: StateContext<KaskoStateModel>, { payload }: LoadUserFail) {
    console.error(payload);
  }

  @Action(AddCar)
  addCar({ patchState }: StateContext<KaskoStateModel>, { payload }: AddCar) {
    patchState({
      car: payload
    });
  }
}
