import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolNavigationComponent } from './school-navigation.component';

describe('SchoolNavigationComponent', () => {
  let component: SchoolNavigationComponent;
  let fixture: ComponentFixture<SchoolNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
