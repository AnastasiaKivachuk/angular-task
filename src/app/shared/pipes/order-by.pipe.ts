import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], args: string): any {
    if (!array || !args) { return array; }
    if (args === 'old') {
      return array.sort((a: any, b: any) => {
        return a.payload.doc.data().date.seconds * 1000 - b.payload.doc.data().date.seconds * 1000;
      });
    }

    if (args === 'new') {
      return array.sort((a: any, b: any) => {
        return b.payload.doc.data().date.seconds * 1000 - a.payload.doc.data().date.seconds * 1000;
      });
    }
  }

}


