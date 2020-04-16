import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	public userForm: FormGroup;
	public error: boolean;

  constructor(	private _authService: AuthenticationService,
  				private _formBuilder: FormBuilder,
  				private _router: Router	) {
  	this.error = null;
  	 }

  ngOnInit(): void {
  	this.buildForm();
  }

  //Method to build the Form
  public buildForm(){
  	this.userForm = this._formBuilder.group({
  		email: ['', [Validators.required, Validators.email]],
  		password: ['', Validators.required],
  		nick: ['', Validators.required],
  		name: ['', Validators.required],
  		lastname: ['', Validators.required]
  	});
  }

  //Method to call the service and send the data to the server
  public onSubmit(data){
  	console.log(data);
  	this._authService.signup(data).subscribe(
  		(result) => {
  			//console.log(result);
  			alert("Se ha registardo exitosamente");
  			this._router.navigate(['/login']);
  		},
  		(error) => {
  			console.log(<any>error);
  			alert(error.message);
  			this.error = true;
  		}
  	);
  }

  //Method to Validate the controls of the form
  public validate(control: string){
  	const formControl = this.userForm.get(control);
  	if(formControl.touched && formControl.invalid){
  		return 'is-invalid';
  	}
  	if(formControl.valid){
  		return 'is-valid';
  	}
  }

}
