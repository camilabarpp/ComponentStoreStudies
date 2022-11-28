import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './service/star-wars.service';
import { PersonStore } from './store/person.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PersonStore],
})
export class AppComponent implements OnInit {
  title = 'ComponentStoreStudies';

  constructor(
    private readonly _personStore: PersonStore,
    private readonly _starWarsApi: StarWarsService
  ) {}

  ngOnInit(): void {
    this._starWarsApi.getPeople().subscribe({
      next: (people) => {
        console.log(people)
        this._personStore.loadPeople(people);
      },
    });
  }
}
