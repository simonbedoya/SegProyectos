import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '../../../../node_modules/@angular/common';

@Pipe({
  name: 'fecha'
})
export class FechaPipe extends DatePipe implements PipeTransform {

  transform(value: Date, args?: any): string {
    console.log(args[2]);
    return super.transform(value, args);
  }

}
