import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaCorreus } from './llista-correus';

describe('LlistaCorreus', () => {
  let component: LlistaCorreus;
  let fixture: ComponentFixture<LlistaCorreus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaCorreus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaCorreus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
