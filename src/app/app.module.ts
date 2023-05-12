import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaterWithTempComponent } from './heater-with-temp/heater-with-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaterWithTempComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
