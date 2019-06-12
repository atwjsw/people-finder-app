import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person-service.service';
import {Person} from '../person';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  firstName: string;
  lastName: string;
  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  findByLastName() {
    console.log(this.lastName);
    this.personService.findByLastName(this.lastName.trim()).subscribe(res => {
      this.persons = res;
    });
  }

  findByFirstName() {
    console.log(this.firstName);
    this.personService.findByFirstName(this.firstName).subscribe(res => {
      this.persons = res;
    });
  }

  isEmptyLastName() {
    return !this.lastName || this.lastName.trim().length === 0;
  }

  isEmptyFirstName() {
    return !this.firstName || this.firstName.trim().length === 0;
  }
}
