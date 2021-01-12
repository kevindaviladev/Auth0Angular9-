import { Component, OnInit } from '@angular/core';

// Auth0
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  profileJson: string = null;

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    );
  }

  constructor(public auth: AuthService) {  }
  title = 'auth0';

  registrarse(){
    this.auth.loginWithRedirect({ login_hint: 'signup' });
  }

  loginWithRedirect(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect({ login_hint: "signup" });
  }

  logout(): void {
    // Call this to log the user out of the application
    this.auth.logout({ returnTo: window.location.origin });
  }

}
