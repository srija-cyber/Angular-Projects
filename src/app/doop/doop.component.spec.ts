import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoopComponent } from './doop.component';

describe('DoopComponent', () => {
  let component: DoopComponent;
  let fixture: ComponentFixture<DoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
