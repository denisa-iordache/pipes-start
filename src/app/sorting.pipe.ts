import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  pure: false
})
export class SortingPipe implements PipeTransform {

  transform(value: any): any {
    if(value.length===0){
      return value;
    }
    value.sort((a,b)=>a.name.localeCompare(b.name));
    return value;
  }

}
