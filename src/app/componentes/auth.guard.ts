import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'; 
import { Observable } from 'rxjs';
import { AuthServicioService } from '../servicios/auth-servicio.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthServicioService, private router: Router){} 

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.auth.isLogged()){
            //console.log("User is logged in");
            return true;
        }
        this.router.navigate(['/login']);
        //console.log("User is not logged in");
        return false;  
    }  
      
     
}  