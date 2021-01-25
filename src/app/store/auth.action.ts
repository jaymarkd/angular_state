

export class Login {
  static readonly type = '[Logic] Login';
  constructor(public payload: {username: string, password: string}){

  }
}

export class Logout {
  static readonly type = '[Logout] Logout';
  constructor() {

  }
}
