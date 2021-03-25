import { Injectable } from '@angular/core';

// Contact List Mock
import { CONTACTS } from '../mocks/contacts/contacts.mock';
import { Contact } from '../models/contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  /**
   * getAllContacts
   * Method to obtain all contacts
   * @return Contact[]
   */
  getAllContacts(): Contact[] {
    return CONTACTS;
  }

}
