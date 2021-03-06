import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(array: any[], args: string): any {
    if (!array || !args) { return array; }

    if (args === 'Answered') {
      return array.filter((item) => {
        if (item.payload.doc.data().isAnswered) {
          return item;
        }
      });
    }

    if (args === 'NotAnswered') {
      return array.filter((item: any) => {
        if (item.payload.doc.data().isAnswered === false) {
          return item;
        }
      });
    }

    if (args === 'Approved') {
      return array.filter((item) => {
        if (item.payload.doc.data().isApproved) {
          return item;
        }
      });
    }

    if (args === 'NotApproved') {
      return array.filter((item: any) => {
        if (item.payload.doc.data().isApproved === false) {
          return item;
        }
      });
    }

    if (args === 'HTML') {
      return array.filter((item) => {
        if (item.payload.doc.data().HTML) {
          return item;
        }
      });
    }

    if (args === 'CSS') {
      return array.filter((item) => {
        if (item.payload.doc.data().CSS) {
          return item;
        }
      });
    }

    if (args === 'JS') {
      return array.filter((item) => {
        if (item.payload.doc.data().JS) {
          return item;
        }
      });
    }

    if (args === 'myQuestion') {
      return array.filter((item) => {
        if (item.payload.doc.data().author == JSON.parse(localStorage.getItem('user')).email) {
          return item;
        }
      });
    }

    if (args === 'JS') {
      return array.filter((item) => {
        if (item.payload.doc.data().JS) {
          return item;
        }
      });
    }

    if (args === 'myQuestion') {
      return array.filter((item) => {
        if (item.payload.doc.data().author == JSON.parse(localStorage.getItem('user')).email) {
          return item;
        }
      });
    }

    if (args === 'lastWeek') {
      return array.filter((item) => {
        const BDdate = item.payload.doc.data().date.seconds * 1000;
        const now = new Date().getTime();
        const oneWeek = 6.048e+8;
        if (now - BDdate <= oneWeek) {
          return item;
        }
      });
    }



    if (args === 'lastMonth') {
      return array.filter((item) => {
        const BDdate = item.payload.doc.data().date.seconds * 1000;
        const now = new Date().getTime();
        const oneMonth = 2.628e+9;
        if (now - BDdate <= oneMonth) {
          return item;
        }
      });
    }
  }
}
