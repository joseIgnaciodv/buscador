import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'; 
import { Observable } from 'rxjs';
import { AuthServicioService } from '../servicios/auth-servicio.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthServicioService, private router: Router){} 

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isLoggedIn = this.auth.isLogged();  
        if (isLoggedIn) {
           this.router.navigateByUrl("/login");
        }
        return isLoggedIn;    
    }  
      
     
}  