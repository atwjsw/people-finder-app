import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './person';
import {environment} from '../environments/environment';

const API_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) {}

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(`${API_URL}/persons`);
  }

  public findByFirstName(firstName: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${API_URL}/persons`, {params: { firstName }});
  }

  public findByLastName(lastName: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${API_URL}/persons`, {params: { lastName }});
  }
}
