import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ControlComponent } from './control/control.component';
import { ControlValidationComponent } from './control-validation/control-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    ControlComponent,
    ControlValidationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
