import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {PersonListComponent} from '../person-list/person-list.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, PersonListComponent ],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isEmptyLastName', () => {

    it('should return true if lastName input is undefined', () => {
      expect(component.isEmptyLastName()).toBeTruthy();
    });

    it('should return true if lastName input is blank', () => {
      component.lastName = '      ';
      expect(component.isEmptyLastName()).toBeTruthy();
    });

    it('should return false if lastName input has characters', () => {
      component.lastName = ' abc     ';
      expect(component.isEmptyLastName()).toBeFalsy();
    });

  });

  describe('isEmptyFirstName', () => {

    it('should return true if firstName input is undefined', () => {
      expect(component.isEmptyFirstName()).toBeTruthy();
    });

    it('should return true if firstName input is blank', () => {
      component.firstName = '      ';
      expect(component.isEmptyFirstName()).toBeTruthy();
    });

    it('should return false if firstName input has characters', () => {
      component.firstName = ' abc     ';
      expect(component.isEmptyFirstName()).toBeFalsy();
    });
  });
});
