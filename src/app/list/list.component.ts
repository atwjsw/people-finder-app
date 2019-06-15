import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons: Person[];
  loading = false;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.loading = true;
    this.personService.findAll().subscribe(res => {
        this.persons = res;
        this.loading = false;
    });
  }
}
