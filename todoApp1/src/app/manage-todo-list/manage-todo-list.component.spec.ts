import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTodoListComponent } from './manage-todo-list.component';

describe('ManageTodoListComponent', () => {
  let component: ManageTodoListComponent;
  let fixture: ComponentFixture<ManageTodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
