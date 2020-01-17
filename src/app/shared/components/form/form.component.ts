import { Component, OnInit } from '@angular/core';

import ContactInfo from 'src/app/core/models/contact-info';
import { ApplicationsService } from 'src/app/core/firebase/applications.service';
import { AffiliateType } from 'src/app/core/models/affiliate-type';

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
    null, // resume
    null, // affiliate
  );

  constructor(private applicationsService: ApplicationsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.applicationsService.save(this.model);
  }

}
