import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'f2c'
})
export class F2cPipe implements PipeTransform {

  transform(fahrenheit: number): string {
    return ((fahrenheit-32) * 5 / 9).toFixed(2).toString();
  }

}
