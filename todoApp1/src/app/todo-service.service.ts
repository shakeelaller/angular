import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
// updatingItemList;
// itemList;
// item;
  constructor() { }
  serviceAlert(){
    alert('works')
  }
  AddItem(item,itemList){
  itemList.push(item)
  return itemList;
}

}
// observable..... some data from check public api and console the data

