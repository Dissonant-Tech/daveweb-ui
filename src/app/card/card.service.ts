import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Card } from './card';

@Injectable()
export class CardService {

  constructor(
    private http: HttpClient
  ) { }

}
