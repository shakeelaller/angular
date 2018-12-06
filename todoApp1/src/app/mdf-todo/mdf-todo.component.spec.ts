import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfTodoComponent } from './mdf-todo.component';

describe('MdfTodoComponent', () => {
  let component: MdfTodoComponent;
  let fixture: ComponentFixture<MdfTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
