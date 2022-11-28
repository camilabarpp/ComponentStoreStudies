import { Injectable, OnDestroy } from '@angular/core';
import { Person, StarWarsService } from '../service/star-wars.service';
import { ComponentStore } from '@ngrx/component-store';
import { Subscription, tap } from 'rxjs';

export interface PersonState {
  people: Person[];
  editedPerson: Person | undefined;
}

const defaultState: PersonState = {
  people: [],
  editedPerson: undefined,
};

@Injectable()
export class PersonStore
  extends ComponentStore<PersonState>
  implements OnDestroy
{
  private _subs = new Subscription();

  constructor(private readonly _starWarsService: StarWarsService) {
    super(defaultState);
  }

  //Selecters
  readonly people$ = this.select(({ people }) => people);
  readonly editedPerson$ = this.select(({ editedPerson }) => editedPerson).pipe(
    tap((person) => console.log('editedPerson$', person))
  );

  //Updaters
  readonly loadPeople = this.updater((state, people: Person[] | null) => ({
    ...state,
    people: people || [],
  }));

  override ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
