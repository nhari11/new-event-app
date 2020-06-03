import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEventsComponent } from 'src/app/events/list-events/list-events.component';
import { BookingEventsComponent } from 'src/app/events/booking-events/booking-events.component';
import { Error4Component } from './error/error4/error4.component';

const routes: Routes = [  
  { path:'list',component:ListEventsComponent },
  { path:'booking',component:BookingEventsComponent },
  { path:'',redirectTo:'/list',pathMatch:'full' },
  {
    path: '**',
    component: Error4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
