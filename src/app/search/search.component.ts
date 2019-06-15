import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
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
  loading = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {}

  findByLastName() {
    this.loading = true;
    this.personService.findByLastName(this.lastName.trim()).subscribe(res => {
        this.persons = res;
        this.loading = false;
    });
  }

  findByFirstName() {
    this.loading = true;
    this.personService.findByFirstName(this.firstName).subscribe(res => {
        this.persons = res;
        this.loading = false;
    });
  }

  isEmptyLastName() {
    return !this.lastName || this.lastName.trim().length === 0;
  }

  isEmptyFirstName() {
    return !this.firstName || this.firstName.trim().length === 0;
  }
}
