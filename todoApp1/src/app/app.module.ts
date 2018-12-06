import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageTodoListComponent } from './manage-todo-list/manage-todo-list.component';
import { SortObjectArrayPipe } from './sort-object-array.pipe';
import { TdfTodoComponent } from './tdf-todo/tdf-todo.component';
import { MdfTodoComponent } from './mdf-todo/mdf-todo.component';
import { TodoServiceService } from './todo-service.service';
import { HttpClientModule} from '@angular/common/http';
import { HttpConnectService} from './http-connect.service';
import { CountryListComponent } from './country-list/country-list.component';
import { AddItemSectionComponent } from './add-item-section/add-item-section.component';
import { SortSectionComponent } from './sort-section/sort-section.component';
import { TableViewSectionComponent } from './table-view-section/table-view-section.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageTodoListComponent,
    SortObjectArrayPipe,
    TdfTodoComponent,
    MdfTodoComponent,
    CountryListComponent,
    AddItemSectionComponent,
    SortSectionComponent,
    TableViewSectionComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [TodoServiceService,HttpConnectService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
