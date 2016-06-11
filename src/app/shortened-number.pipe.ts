import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenedNumber'
})
export class ShortenedNumber implements PipeTransform {

  transform(num: number, args?: any): string {
    if (num >= 1000000000) {
      let int = (num / 1000000000);
      return int.toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (num >= 1000000) {
      let int = (num / 1000000);
      return int.toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
      let int = (num / 1000);
      return int.toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
      return num.toString();
    }
  }
}
