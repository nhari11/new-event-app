import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

import { SearchPipe } from '../../shared/pipes/search.pipe';

import  { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  public eventSearchForm: FormGroup;
  listEvents:any=[];
  eventCount:number;

  private eventForm:FormGroup;
  file:string="./assets/data/ListEvents.json";

  constructor(private event_fb:FormBuilder, private apiService:ApiService) { }

  ngOnInit() {

    this.apiService.getJSON(this.file).subscribe(data  => {
      console.log(data.eventDetails);
      this.listEvents=data.eventDetails;
      // data.eventDetails.map(g=> { 
      //   //return g
      //   console.log(g);
      //   this.listEvents.push(g);
      // } );      
    });

    this.eventForm=new FormGroup({
      Name:new FormControl(),
      Email:new FormControl()
    });
    this.eventSearchForm=this.event_fb.group({
      searchValue:['',[Validators.required]]
    });
    console.log("Form Group....");
    console.log(this.eventSearchForm);
    console.log(this.listEvents);
    this.eventCount=this.listEvents.length;
    console.log("Count of Events:"+this.eventCount);

    this.eventSearchForm.get('searchValue').valueChanges.subscribe(val=>{
      console.log(val);
    });
  }

}
