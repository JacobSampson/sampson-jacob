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
      const path = `resume_${contactInfo.id}`;
      this.fst.upload(path, contactInfo.resume).then(resume => {
        contactInfo.resume = resume.ref.fullPath;
        contactInfo.fill();

        // Save info with resume link
        this.fs.collection('applications').doc(contactInfo.id).set({...contactInfo});
      });
    } else {
      contactInfo.fill();

      // Save info
      this.fs.collection('applications').doc(contactInfo.id).set({...contactInfo});
    }
  }

}
