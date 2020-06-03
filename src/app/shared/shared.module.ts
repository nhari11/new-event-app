import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
