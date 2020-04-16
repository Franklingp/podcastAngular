import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AudioService } from '../service/audio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
	public singleForm: FormGroup;
	public tempImage: any;
	public tempAudio: any;

  constructor(	private _formBuilder: FormBuilder,
  				private _audioService: AudioService,
  				private _router: Router	) {
  	this.tempImage = null;
  	this.tempAudio = null;
  }

  ngOnInit(): void {
  	this.buildForm();
  }

  //Method to build the form to colect the data
  public buildForm(){
  	this.singleForm = this._formBuilder.group({
  		title: ['', [Validators.required]],
  		album: ['', [Validators.required]],
  		artist: ['', [Validators.required]],
  		audio: [null, [Validators.required, this.validateAudio]],
  		image: [null, [Validators.required, this.validateImage]]
  	});
  }

  //Method to upload the data
  public onSubmit(data){
	let formData = new FormData();
	formData.append('title', data.title);
	formData.append('album', data.album);
	formData.append('artist', data.artist);
	formData.append('audio', this.tempAudio);
	formData.append('image', this.tempImage);
	console.log(formData);
	this._audioService.upload(formData).subscribe(
		(result)=>{
			console.log(result);
			alert('Se ha subido el audio correctamente');
			this._router.navigate(['/audio']);
		},
		(error) => {
			console.log(<any>error);
			alert(error.message);
		}
	)
  }

  //Method to validate te controls in real time
  public validateControl(control){
  	const formControl = this.singleForm.get(control);
  	if(formControl.touched && formControl.invalid){
  		return 'is-invalid';
  	}
  	if(formControl.touched && formControl.valid){
  		return 'is-valid';
  	}
  }

  //Method to validate the image file
  public validateImage(control: AbstractControl){
  	if(control.value != null){
  		let controlValue = control.value;
  		const length = controlValue.split('.').length;
  		let ext = controlValue.split('.')[length - 1];
  		if(ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg'){
  			return {error: 'is not image'};
  		}else{
  			return null;
  		}
  	}
  }

  //method to validate the audio file
  public validateAudio(control: AbstractControl){
  	if(control.value != null){
  		let controlValue = control.value;
  		const length = controlValue.split('.').length;
  		let ext = controlValue.split('.')[length - 1];
  		if(ext !== 'mp3' && ext !== 'wav' && ext !== 'aac'){
  			return {error: 'is not audio'};
  		}else{
  			return null;
  		}
  	}
  }

  //Method to get temporal data of the files to upload
  public tempFile(event, control){
  	//console.log(event);

  	if(control === 'audio'){
  		this.tempAudio = event.target.files[0];
  		//console.log(this.tempAudio);
  	}
  	if(control === 'image'){
  		this.tempImage = event.target.files[0];
  		//console.log(this.tempImage);
  	}
  }


}

