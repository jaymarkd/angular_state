import { AuthState } from './store/auth.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login, Logout } from './store/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stateProject';
  constructor( private store: Store) {

  }
  ngOnInit(){
    console.log('start');
    const state = this.store.selectSnapshot(AuthState);
    console.log('state',state);
    const token = this.store.selectSnapshot(AuthState.token);
    console.log('token',token);
    const firstName = this.store.selectSnapshot(AuthState.firstName);
    console.log('firstname',firstName);
    console.log('insert Data');

    this.store.dispatch(new Login({username: 'test', password: 'pass'}));
    console.log('checking data');

    const state1 = this.store.selectSnapshot(AuthState);
    console.log('state',state1);
    const token1 = this.store.selectSnapshot(AuthState.token);
    console.log('token',token1);
    const firstName1 = this.store.selectSnapshot(AuthState.firstName);
    console.log('firstname',firstName1);

    this.store.dispatch(new Logout())
    console.log('checking data logout');
    const state2 = this.store.selectSnapshot(AuthState);
    console.log('state',state2);
    const token2 = this.store.selectSnapshot(AuthState.token);
    console.log('token',token2);
    const firstName2 = this.store.selectSnapshot(AuthState.firstName);
    console.log('firstname',firstName2);

  }
}
