import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-todo',
  templateUrl: './mdf-todo.component.html',
  styleUrls: ['./mdf-todo.component.css']
})
export class MdfTodoComponent implements OnInit {

  item:object={}
  itemList:Array<object>=[]
  form1;
  updatingItemList=false;
  sortByKey:any;
  sortOrder:any;
  constructor() { }

  ngOnInit() {
    this.form1=new FormGroup({
      description:new FormControl(Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      priority:new FormControl(Validators.compose([
        Validators.required
      ]))
    });
  }
  onSubmit=function(formData){
    console.log(formData);
    this.updatingItemList=false;
    this.itemList.push(formData)
    // this.item={}
    setTimeout(()=>{
    this.updatingItemList=true;
    },100);
    console.log(this.itemList);
    
  }
  RemoveItem(item){
    this.updatingItemList=false;
    this.itemList.splice(this.itemList.indexOf(item),1)
    setTimeout(()=>{
      this.updatingItemList=true;
    },100);
  }
}
