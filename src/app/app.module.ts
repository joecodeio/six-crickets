import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondsLeftComponent } from './components/seconds-left/seconds-left.component';
import { CameraSelectorComponent } from './components/camera-selector/camera-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondsLeftComponent,
    CameraSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
