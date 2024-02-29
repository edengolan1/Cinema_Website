import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthSummary',
  standalone: true
})
export class LengthSummaryPipe implements PipeTransform {

  transform(value: string, count: number): string {
    let res = value
    if(res && res.length > count){
      return res.substring(0, count) + "...";
    }
    return res;
  }

}
