import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class PersonService {

  private personsUrl: string;

  constructor(private http: HttpClient) {
    // this.personsUrl = 'http://localhost:8080/persons';
    this.personsUrl = 'https://peoplefinder-backend.herokuapp.com/persons';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
  }

  public findByFirstName(firstName: string): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl + '?firstName=' + firstName);
  }

  public findByLastName(lastName: string): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl + '?lastName=' + lastName);
  }
}
