import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'c2f'
})
export class C2fPipe implements PipeTransform {

  transform(celsius: number): string {
    return (((9 * celsius) / 5) + 32).toFixed(2).toString();
  }

}
