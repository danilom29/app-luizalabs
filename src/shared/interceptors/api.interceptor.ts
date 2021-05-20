/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { environment } from './../../environments/environment';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('@test-luizalabs-api')) {
      req = req.clone({
        url: req.url.replace('@test-luizalabs-api', environment.urlApi),
      });
    }

    req = req.clone({
      setHeaders: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return next.handle(req);
  }
}
