import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Person {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
}

export interface ApiResponse {
  results: any;
  // results: Person[];
}

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  private API_ROOT: string = 'https://swapi.dev/api';

  constructor(private _http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this._http
    .get(`${this.API_ROOT}/people`)
    .pipe(
        map((res: any) =>
        res.results.map((person: any, index: any) => ({ ...person, id: index }))
        )
      );
  }
}
