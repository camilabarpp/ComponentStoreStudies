import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWarsListComponent } from './start-wars-list.component';

describe('StartWarsListComponent', () => {
  let component: StartWarsListComponent;
  let fixture: ComponentFixture<StartWarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartWarsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartWarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
