import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-manage-todo-list',
  templateUrl: './manage-todo-list.component.html',
  styleUrls: ['./manage-todo-list.component.css']
})
export class ManageTodoListComponent implements OnInit {
  item:object={}
  itemList:Array<object>=[]
  updatingItemList=false;
  sortByKey:any;
  sortOrder:any;
  constructor(public todoService:TodoServiceService) {}

  ngOnInit() {
    this.todoService.serviceAlert();
  }
  AddItem(){
    this.updatingItemList=false;
    this.itemList=this.todoService.AddItem(this.item,this.itemList)
    // console.log(this.itemList);
    this.item={}
    setTimeout(()=>{
    this.updatingItemList=true;
  },100);
  }
  // AddItem(){
  //   this.updatingItemList=false;
  //   this.itemList.push(this.item)
  //   this.item={}
  //   setTimeout(()=>{
  //   this.updatingItemList=true;
  //   },100);
  // }
  RemoveItem(item){
    this.updatingItemList=false;
    this.itemList.splice(this.itemList.indexOf(item),1)
    setTimeout(()=>{
      this.updatingItemList=true;
    },100);
  }
}
