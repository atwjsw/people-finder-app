import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    });
  }

}
