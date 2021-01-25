import { AuthState } from './store/auth.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      AuthState
    ],
    {developmentMode: !environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
