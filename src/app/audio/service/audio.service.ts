import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
	private url: string;
	private headers;

  constructor(	private _http: HttpClient	) {
  	this.headers = new HttpHeaders().set("Content-Type", "application/json");
  	this.url = 'http://localhost:3700/api/audio';
  }

  //Method to test the server and the service
  public test():Observable<any>{
  	return this._http.get(this.url + '/test', {headers: this.headers});
  }

  //Method to get the list of all the data to the server (audio)
  public getAudio(data): Observable<any>{
  	if(data === null){
  		return this._http.post(this.url+'/get', {}, {headers: this.headers});
  	}
  	if(typeof(data) === 'string'){
  		return this._http.post(this.url+'/get/'+data, {}, {headers: this.headers});
  	}else{
  		return this._http.post(this.url+'/get', data, {headers: this.headers});
  	}
  }

  //Method to upload a new single
  public upload(data){
  	return this._http.post(this.url + '/add', data);
  }
}
