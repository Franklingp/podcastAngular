import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
	private token: string;

  constructor() { 
  	this.token = "";
  }

	public intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
	  	if(this.token !== ""){
	  		request = request.clone({ headers: request.headers.set('Authorization', 'beare '+this.token)});
	  	}
	  	request = request.clone({ headers: request.headers.set('Accept', 'application/json')});
	return next.handle(request).pipe(
  		map((event: HttpEvent<any>) => {
  			if(event instanceof HttpResponse){
  				this.token = event.body.token;
  			}
  			return event;
  		},
  		(error: HttpErrorResponse) => {
  			console.log(error);
  			return error;
  		}
  		)
  	);
  }
}
