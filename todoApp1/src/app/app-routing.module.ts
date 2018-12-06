import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageTodoListComponent } from './manage-todo-list/manage-todo-list.component';
import {TdfTodoComponent} from './tdf-todo/tdf-todo.component';
import {MdfTodoComponent} from './mdf-todo/mdf-todo.component';
import { CountryListComponent } from './country-list/country-list.component';
import { ParentComponent} from './parent/parent.component';
// import { SortSectionComponent } from './sort-section/sort-section.component';
// import { TableViewSectionComponent } from './table-view-section/table-view-section.component';

const routes: Routes = [
  {path:"managetodolist",
    component:ManageTodoListComponent
  },
  {path:"formtdfTodo",
  component:TdfTodoComponent
  },
  {path:"formmdfTodo",
  component:MdfTodoComponent
  },
  {path:"countryList",
  component:CountryListComponent
  },
  {path:"Parent",
  component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
