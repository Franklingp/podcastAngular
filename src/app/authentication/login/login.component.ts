import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public form: {
		primaryKey: string,
		password: string
	};
	public error: string;

  constructor(	private _authService: AuthenticationService,
  				private _router: Router	) {
  	this.form = {primaryKey: "", password:""};
  	this.error = "";
 }

  ngOnInit(): void {
  }

  //Method to sumbit the formdata
  public onSubmit(form){
  	this._authService.login(form).subscribe(
  		(restult) =>{  				
  			alert('Se ha iniciado sesion correctamente');
  			this._router.navigate(['/']);
  		},	
  		(error) => {
  			console.log(<any>error);
  			if(error.status == 404){
  				this.error = "No se ha encontrado el usuario";
  			}if(error.status == 301){
  				this.error = "El usuario o contrasena es incorrecto";
  			}
  		}
  	)
  }

}
