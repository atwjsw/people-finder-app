import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  @Input()
  persons: Person[];

  constructor() { }

  ngOnInit() {
  }

}
