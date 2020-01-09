import { Component, OnInit } from '@angular/core';
import ContactInfo from 'src/app/core/models/contact-info';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model = new ContactInfo(
    null, // firstName
    null, // lastName
    null, // emailAddress
    null, // phoneNumber
    null, // location
    null, // instagramHandle
    null  // resume
  );

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }

}
