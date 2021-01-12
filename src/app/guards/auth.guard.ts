import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { delay, tap } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router) { }

    loggedin:boolean;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | Promise<boolean | UrlTree> | boolean {
      //  console.log('xd');
      //  if(!this.auth.isAuthenticated$){
      //    console.log('No autenticado');
      //    this.router.navigate(['public']);
      //  }else{
      //    return true;
      //  }


      // return this.auth.isAuthenticated$;
      let response:boolean = false;

      return this.auth.isAuthenticated$.pipe(
      tap(loggedIn => {
        console.log(loggedIn);
        if(loggedIn){
          console.log("Puede pasar");
        }else{
          console.log('No autorizado');
          this.router.navigate(['public']);
        }
      }),
      );
  }
  
}