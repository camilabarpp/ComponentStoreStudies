import { Component, OnInit } from '@angular/core';
import { PersonStore } from '../store/person.store';

@Component({
  selector: 'start-wars-list',
  templateUrl: './start-wars-list.component.html',
  styleUrls: ['./start-wars-list.component.scss'],
})
export class StartWarsListComponent {
  people$ = this._personStore.people$;

  displayedColumns = [
    'name',
    'birth_year',
    'eye_color',
    'gender',
    'hair_color',
    'height',
    'mass',
    'controls',
  ];

  constructor(private readonly _personStore: PersonStore) {}
}
