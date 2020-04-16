import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [HomeComponent, NotfoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [HomeComponent, NotfoundComponent],
})
export class SharedModule { }
