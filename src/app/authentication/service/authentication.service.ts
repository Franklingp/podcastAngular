import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
	private headers;
	private url: string;

  constructor(	private _http: HttpClient	) { 
  	this.headers = new HttpHeaders().set("Content-Type", "application/json");
  	this.url = 'http://localhost:3700/api/user';
  }

  	//Method to test the service and the server
  	public test():Observable<any>{
  		return this._http.get(this.url + '/test', {headers: this.headers});
  	}

  	//Method to login a user
  	public login(form):Observable<any>{
  		return this._http.post(this.url + '/login', form, {headers: this.headers});
  	}

  	//Method to signup
  	public signup(form):Observable<any>{
  		return this._http.post(this.url + '/sing-up', form, {headers: this.headers});
  	}

}
