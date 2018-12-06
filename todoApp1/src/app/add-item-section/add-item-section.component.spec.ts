import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemSectionComponent } from './add-item-section.component';

describe('AddItemSectionComponent', () => {
  let component: AddItemSectionComponent;
  let fixture: ComponentFixture<AddItemSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
