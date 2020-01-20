import { Injectable } from '@angular/core';
import ContactInfo from '../models/contact-info';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private fst: AngularFireStorage, private fs: AngularFirestore) { }

  save(contactInfo: ContactInfo) {
    contactInfo.id = this.fs.createId();

    // Save resume, if attached
    if (contactInfo.resume) {
      const path = `/resumes/resume__${contactInfo.id}`;

      this.fst.upload(path, contactInfo.resume).then(resume => {
        contactInfo.resumePath = resume.ref.fullPath;
        contactInfo.fill();

        // Save info with resume link
        this.fs.collection('applications').doc(contactInfo.id).set({
          id: contactInfo.id,
          firstName: contactInfo.firstName,
          lastName: contactInfo.lastName,
          emailAddress: contactInfo.emailAddress,
          phoneNumber: contactInfo.phoneNumber,
          location: contactInfo.location,
          instagramHandle: contactInfo.instagramHandle,
          resumePath: contactInfo.resumePath,
          affiliate: contactInfo.affiliate
        });
      }).catch(err => {
        console.log('Error uploading application');
      });
    } else {
      contactInfo.fill();

      // Save info
      this.fs.collection('applications').doc(contactInfo.id).set({...contactInfo});
    }
  }

}
