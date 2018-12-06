import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewSectionComponent } from './table-view-section.component';

describe('TableViewSectionComponent', () => {
  let component: TableViewSectionComponent;
  let fixture: ComponentFixture<TableViewSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
