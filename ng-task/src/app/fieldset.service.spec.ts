import { TestBed } from '@angular/core/testing';

import { FieldsetService } from './fieldset.service';
import {HttpClientModule} from '@angular/common/http';

describe('FieldsetService', () => {
  let service: FieldsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FieldsetService]
    });
    service = TestBed.inject(FieldsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
