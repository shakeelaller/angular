import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSectionComponent } from './sort-section.component';

describe('SortSectionComponent', () => {
  let component: SortSectionComponent;
  let fixture: ComponentFixture<SortSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
