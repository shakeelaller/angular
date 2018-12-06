import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-todo',
  templateUrl: './tdf-todo.component.html',
  styleUrls: ['./tdf-todo.component.css']
})
export class TdfTodoComponent implements OnInit {
  itemList:Array<object>=[];
  updatingItemList=false;
  constructor() { }

  ngOnInit() {
  }
  AddItem(item){
    console.log(item)
    this.updatingItemList=false;
    this.itemList.push(item)
    setTimeout(()=> {
      this.updatingItemList=true;
    },100);
  }
  RemoveItem(item){
    this.updatingItemList=false;
    this.itemList.splice(this.itemList.indexOf(item),1)
    setTimeout(()=>{
      this.updatingItemList=true;
    },100);
  }
}
