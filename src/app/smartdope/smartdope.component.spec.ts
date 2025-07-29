import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartdopeComponent } from './smartdope.component';

describe('SmartdopeComponent', () => {
  let component: SmartdopeComponent;
  let fixture: ComponentFixture<SmartdopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartdopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartdopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
