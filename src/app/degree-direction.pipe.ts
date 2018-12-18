import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeDirection'
})
export class DegreeDirectionPipe implements PipeTransform {

  transform(Degrees: number): string {
      switch(true) {
          case Degrees <= 22.5:
              return 'N';
              break;
          case Degrees <= 67.5:
              return 'NE';
              break;
          case Degrees <= 112.5:
              return 'E';
              break;
          case Degrees <= 157.5:
              return 'SE';
              break;
          case Degrees <= 202.5:
              return 'S';
              break;
          case Degrees <= 247.5:
              return 'SW';
              break;
          case Degrees <= 292.5:
              return 'W';
              break;
          case Degrees <= 337.5:
              return 'SW';
              break;
          case Degrees <= 360:
              return 'N';
              break;
          default:
              return Degrees.toString();
      }
  }

}
