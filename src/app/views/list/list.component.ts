import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  contactList: Contact[] = [];

  // We inject the Contact Service to the component
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // Before the component is rendered, we need to obtain the list
    // of contacts. We use the service to obtain the list
    this.contactList = this.contactService.getAllContacts();
  }

}
