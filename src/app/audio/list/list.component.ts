import { Component, OnInit } from '@angular/core';
import { AudioService } from '../service/audio.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	public audio: any;
	public result: boolean;

  constructor(	private _audioService: AudioService	) {
  	this.audio = null;
  	this.result = false;
  }

  ngOnInit(): void {
  	this.getAudio(null,null);
  }

  //Method to get the data of audio
  public getAudio(key, value){
  	if(key === null){
  		this._audioService.getAudio(null).subscribe(
	  		(result) => {
	  			//console.log(result);
	  			this.audio = result.audio;
	  			this.result = true;
	  			//console.log(this.audio);
	  		},
	  		(error) => {
	  			console.log(<any>error);
	  			alert(error.message);
	  		}
  		);
  	}else{
  		let data = {key: key, value: value};
  		//console.log(data)
  		this._audioService.getAudio(data).subscribe(
	  		(result) => {
	  			this.audio = null;
	  			//console.log(result);
	  			this.audio = result.audio;
	  			//console.log(this.audio);
	  		},
	  		(error) => {
	  			console.log(<any>error);
	  			alert(error.message);
	  		}
  		);
  	}
  }

}
