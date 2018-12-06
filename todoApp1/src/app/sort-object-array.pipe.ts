import { Pipe, PipeTransform } from '@angular/core';
import {sortBy} from 'lodash';
@Pipe({
  name: 'sortObjectArray'
})
export class SortObjectArrayPipe implements PipeTransform {

  transform(value: any, key?: any, direction?:any): any {
    //console.log(lodash);
    value=sortBy(value, function(o) { return o[key]; });
    if (direction=='dsc'){
      value=value.reverse();
    }
    console.log(value);
    return value;
  }

}
