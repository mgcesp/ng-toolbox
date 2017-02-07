import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoBgComponent } from './video-bg/video-bg.component';
import { AnimateComponent } from './animate/animate.component';
import { FaderComponent } from './fader/fader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { EggheadComponent } from './egghead/egghead.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoBgComponent,
    AnimateComponent,
    FaderComponent,
    SpinnerComponent,
    EggheadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
