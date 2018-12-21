import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = {headers: new Headers({'Content-Type': 'application/json'})};


@Injectable()
export class WidgetsService {
  constructor(private http: Http) { }

  loadWidgets() {
    return this.http.get(`${BASE_URL}`)
      .map(res => res.json());
  }

}
