export default class ContactInfo {

  constructor(
    public firstName: string,
    public lastName: string,
    public emailAddress: string,
    public phoneNumber: number | string,
    public location: string,
    public instagramHandle?: string,
    public resume?: File | any
  ) { }
}
