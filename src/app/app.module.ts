import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirststepComponent } from './dragdrop/firststep/firststep.component';
import { SecondstepComponent } from './dragdrop/secondstep/secondstep.component';

@NgModule({
  declarations: [
    AppComponent,
    FirststepComponent,
    SecondstepComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
