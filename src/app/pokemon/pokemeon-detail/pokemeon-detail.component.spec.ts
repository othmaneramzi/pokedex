import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemeonDetailComponent } from './pokemeon-detail.component';

describe('PokemeonDetailComponent', () => {
  let component: PokemeonDetailComponent;
  let fixture: ComponentFixture<PokemeonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemeonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemeonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
