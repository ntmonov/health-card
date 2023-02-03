import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HealthCardFrontComponent } from './components/health-card-fron/health-card-front.component';
import { HealthCardBackComponent } from './components/health-card-back/health-card-back.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthCardFrontComponent,
    HealthCardBackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
