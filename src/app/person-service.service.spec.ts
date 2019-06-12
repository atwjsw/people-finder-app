import { TestBed } from '@angular/core/testing';

import { PersonService } from './person-service.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('PersonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: PersonService = TestBed.get(PersonService);
    expect(service).toBeTruthy();
  });
});
