import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clickme } from './clickme';

describe('Clickme', () => {
  let component: Clickme;
  let fixture: ComponentFixture<Clickme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clickme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clickme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
