import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ErrorModule } from './error/error.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEventsComponent } from './events/list-events/list-events.component';
import { BookingEventsComponent } from './events/booking-events/booking-events.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEventsComponent,
    BookingEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    ErrorModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
