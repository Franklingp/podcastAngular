import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AudioRoutingModule } from './audio-routing.module';
import { UploadComponent } from './upload/upload.component';
import { ListComponent } from './list/list.component';
import { AudioComponent } from './audio/audio.component';


@NgModule({
  declarations: [UploadComponent, ListComponent, AudioComponent],
  imports: [
    CommonModule,
    AudioRoutingModule,
    ReactiveFormsModule
  ]
})
export class AudioModule { }
