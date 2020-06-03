import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from '../../shared/custom.validators';

@Component({
  selector: 'app-booking-events',
  templateUrl: './booking-events.component.html',
  styleUrls: ['./booking-events.component.css']
})
export class BookingEventsComponent implements OnInit {
  bookingForm: FormGroup;
  validationMessages = {
    'name': {
      'required': 'Please enter your name'
    },
    'email': {
      'required': 'Please enter your email',
      'emailInvalid': 'Invalid email Address.....'
    },
    'no_of_seats': {
      'required': 'Please enter the number of seats'
    },
    'name_of_attendee': {
      'required': 'Please enter the name of Attendee '
    }
  };

  formErrors = {
    'name': '',
    'email': '',
    'no_of_seats': '',
    'name_of_attendee': ''
  };

  constructor(private bookFB: FormBuilder) { }

  ngOnInit() {

    this.bookingForm = this.bookFB.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, CustomValidators.emailInvalid()]],
      phoneNo: [''],
      no_of_seats: ['', [Validators.required]],
      attendees: this.bookFB.array([
        this.addAttendee()
      ])
    });

    this.bookingForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.bookingForm);
    });

    this.bookingForm.get('no_of_seats').valueChanges.subscribe((data) => {
      console.log(data);
      if(data>1){
        for (let k=1;k<data;k++) {
        (<FormArray>this.bookingForm.get('attendees')).push(this.addAttendee());
        }
      }
    })

  }

  addAttendee():FormGroup{
    return this.bookFB.group({
      name_of_attendee: ['', [Validators.required]]
    });
  }

  logValidationErrors(group: FormGroup = this.bookingForm): void {
    //console.log(group);
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.validationMessages[key];
        // console.log(messages);
        // console.log(abstractControl.errors);
        for (const errorKey in abstractControl.errors) {
          // console.log(errorKey);
          // console.log(key);
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }

      if (abstractControl instanceof FormArray) {
        for(const control of abstractControl.controls){
          if(control instanceof FormGroup){
            this.logValidationErrors(control);
          }
        }        
      }


    });
  }

  onLoadDataClick(): void {
    // this.logValidationErrors(this.bookingForm);
    // console.log(this.formErrors);
  }



}

