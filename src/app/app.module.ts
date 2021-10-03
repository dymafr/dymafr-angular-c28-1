import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './shared/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
