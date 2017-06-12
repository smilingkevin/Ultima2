import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ultima2Component } from './ultima2.component';
import { ScreenComponent } from './screen/screen.component';
import { MapService } from './map/map.service';

@NgModule({
  declarations: [
    Ultima2Component,
    ScreenComponent,
    ScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MapService],
  bootstrap: [Ultima2Component]
})
export class AppModule { }
