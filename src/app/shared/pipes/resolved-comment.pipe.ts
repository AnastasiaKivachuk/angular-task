import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resolvedComment'
})
export class ResolvedCommentPipe implements PipeTransform {

  transform(array: any[]): any {
    array.forEach((item, i) => {
      if (item.isResolved) {
        const a = item;
        array.splice(i);
        array.unshift(a);
      }
    });
    return array;
  }
}
