import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCapitalize'
})
export class CapitalizePipe implements PipeTransform {

  public transform(value: string): string {
    return value
      .toLowerCase()
      .replace( /\b./g, (a) => a.toUpperCase() );
  }

}
