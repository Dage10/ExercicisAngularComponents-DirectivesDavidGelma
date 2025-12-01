import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Correu } from './correu';

describe('Correu', () => {
  let component: Correu;
  let fixture: ComponentFixture<Correu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Correu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Correu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
