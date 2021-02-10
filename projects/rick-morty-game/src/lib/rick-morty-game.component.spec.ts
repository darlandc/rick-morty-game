import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyGameComponent } from './rick-morty-game.component';

describe('RickMortyGameComponent', () => {
  let component: RickMortyGameComponent;
  let fixture: ComponentFixture<RickMortyGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickMortyGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
