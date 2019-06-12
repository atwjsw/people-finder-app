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
    this.personService.findByLastName(this.lastName).subscribe(res => {
      this.persons = res;
    });
  }

  findByFirstName() {
    console.log(this.firstName);
    this.personService.findByLastName(this.firstName).subscribe(res => {
      this.persons = res;
    });
  }
}
