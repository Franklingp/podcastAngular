import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UploadComponent } from './upload/upload.component';
import { AudioComponent } from './audio/audio.component';


const routes: Routes = [
	{
		path: '',
		component: ListComponent
	},
	{
		path: 'single/:id',
		component: AudioComponent
	},
	{
		path: 'upload',
		component: UploadComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioRoutingModule { }
