import { Login, Logout } from './auth.action';
import { Injectable } from "@angular/core";

import { Action, Selector, State, StateContext } from "@ngxs/store";

export class AuthStateModel {
  token: string;
  user: any;
}

const response = {
  token: 'asd123123sdad',
  user : {
    first_name: 'John',
    last_name: 'Doe'
  }
}
const user = 'test';
const password = 'pass';

@State<AuthStateModel>({  name: 'auth',
  defaults: {
    token: null,
    user: {}
  }
})
@Injectable()
export class AuthState {
  constructor(){

  }


  @Selector()
  static token(state: AuthStateModel): string {
    return state.token;
  }

  @Selector()
  static user(state: AuthStateModel): any {
    return state.user;
  }

  @Selector()
  static firstName(state: AuthStateModel): string {
    return state.user?.first_name || null;
  }

  @Action(Login, { cancelUncompleted: true })
  logic({patchState}:StateContext<AuthStateModel>, {payload} : Login ): void {
    if( user === payload.username && password === payload.password ){
      patchState({
        token:response.token,
        user: response.user

      })
    }
  }

  @Action (Logout, { cancelUncompleted: true })
  logout({patchState}:StateContext<AuthStateModel>):void {
    patchState({
      token: null,
      user: null

    })
  }

}
