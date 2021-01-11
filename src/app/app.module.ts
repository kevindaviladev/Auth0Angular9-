import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { PublicComponent } from './components/public/public.component';
import { PrivateComponent } from './components/private/private.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Auth0
    AuthModule.forRoot({
      domain: 'dev-7cd0ipsj.us.auth0.com',
      clientId: 'Gomh0Q3F2ZfK5RNAIYDgyEvnc9TJqak7'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
