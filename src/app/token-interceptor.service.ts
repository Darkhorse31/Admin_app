import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './apiservice/auth/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private utilityService: AuthService,private router:Router) {}
  private handleAuthenticationError(errObj: HttpErrorResponse): Observable<any> {
   if(errObj.status && errObj.statusText=="Unauthorized"){
    this.router.navigate([''])
   }

    return throwError(errObj);
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.utilityService.gettoken();
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(modifiedReq);
  }
}
