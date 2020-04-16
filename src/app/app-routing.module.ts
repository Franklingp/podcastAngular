import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HomeComponent } from './shared/home/home.component';



const routes: Routes = [

	{
		path:'',
		component: HomeComponent
	},
	{
		path: '',
		loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
	},
	{
		path: 'audio',
		loadChildren: () => import('./audio/audio.module').then(m => m.AudioModule)

	},
	{
		path:'**',
		component: NotfoundComponent

	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
