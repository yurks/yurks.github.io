import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { from  } from 'rxjs';

import { Field } from './fieldset';

@Injectable({
  providedIn: 'root'
})
export class FieldsetService {

  constructor(
    private http: HttpClient
  ) { }

  getFields() {
    return from(this.http.get<Field[]>('assets/fields.mock.json'))
      .pipe(delay(1900));
  }

}
