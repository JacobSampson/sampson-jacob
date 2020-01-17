import { AffiliateType } from './affiliate-type';

export default class ContactInfo {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public emailAddress: string,
    public phoneNumber: number | string,
    public location: string,
    public instagramHandle?: string,
    public resume?: File | any,
    public affiliate?: Map<AffiliateType, string> | any
  ) { }

  fill() {
    this.id = this.id || '';
    this.firstName = this.firstName || '';
    this.lastName = this.lastName || '';
    this.emailAddress = this.emailAddress || '';
    this.phoneNumber = this.phoneNumber || '';
    this.location = this.location || '';
    this.instagramHandle = this.instagramHandle || '';
    this.resume = this.resume || '';
    this.affiliate = this.affiliate || '';
  }
}
