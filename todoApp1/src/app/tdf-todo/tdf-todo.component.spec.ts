import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfTodoComponent } from './tdf-todo.component';

describe('TdfTodoComponent', () => {
  let component: TdfTodoComponent;
  let fixture: ComponentFixture<TdfTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
