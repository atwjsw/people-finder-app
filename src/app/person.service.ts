import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = environment.baseUrl;
  readonly personsUrl: string;

  constructor(private http: HttpClient) {
    this.personsUrl = this.baseUrl + '/persons';
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
