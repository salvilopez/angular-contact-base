import { IContact } from "./icontact.interface";
export class Contact implements IContact{
  first_name: string;
  last_name: string;
  email: string;
  phone: string;

  constructor(first_name: string, last_name: string, email: string, phone:string ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone = phone;
  }

  /**
   * showDetails()
   * @returns string
   * Contact details in string
   */
  // showDetails(): string {
  //   return `Contact: ${this.first_name} ${this.last_name}
  //   \nEmail: ${this.email}
  //   \nPhone:${this.phone}
  //   `
  // }


}
