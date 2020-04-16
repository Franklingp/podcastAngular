import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AudioService } from '../service/audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
	private id: string;
	public single: any;

  constructor(	private _active: ActivatedRoute,
  				private _audioService: AudioService	) {
  	this.id = "";
  	this.single = null;
  }

  ngOnInit(): void {
  	this.getId();
  }

  //Method to get the id of the url 
  private getId(){
  	this._active.params.subscribe(
  		(result)=>{
  			console.log(result.id);
  			this.id = result.id;
  			this.getSingle(this.id);
  		}
  	);
  }

  //Method to get the audio for the id
  public getSingle(id){
  	this._audioService.getAudio(id).subscribe(
  		(result) => {
  			this.single = result.audio;
  			console.log(this.single);
  		},
  		(error) => {
  			console.log(<any>error);
  			alert(error.messsage);
  		}
  	);
  }
}
