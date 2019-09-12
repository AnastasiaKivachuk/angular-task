import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(array: any[], args: string): any {

    if (!array || !args ) { return array; }

   if (args === 'Answered'){
    return array.filter((item)=>{
      if(item.payload.doc.data().isAnswered){
        return item}

    });
    console.log(array);
  }

    if (args === 'NotAnswered'){

      return array.filter((item: any)=>{
        if(item.payload.doc.data().isAnswered===false){
          return item}
      });
      console.log(array);
}

if (args === 'Approved'){
  return array.filter((item)=>{
    if(item.payload.doc.data().isApproved){
      return item}

  });
  console.log(array);
}

if (args === 'NotApproved'){

  return array.filter((item: any)=>{
    if(item.payload.doc.data().isApproved===false){
      return item}
  });
  console.log(array);
}

if (args === 'HTML'){
  return array.filter((item)=>{
    if(item.payload.doc.data().HTML){
      return item}

  });
  console.log(array);
}
if (args === 'CSS'){
  return array.filter((item)=>{
    if(item.payload.doc.data().CSS){
      return item}

  });
  console.log(array);
}
if (args === 'JS'){
  return array.filter((item)=>{
    if(item.payload.doc.data().JS){
      return item}

  });
  console.log(array);
}

if (args === 'myQuestion'){
  return array.filter((item)=>{
    if(item.payload.doc.data().author==JSON.parse(localStorage.getItem('user')).email){
      return item}

  });
  console.log(array);
}
if (args === 'JS'){
  return array.filter((item)=>{
    if(item.payload.doc.data().JS){
      return item}

  });
  console.log(array);
}

if (args === 'myQuestion'){
  return array.filter((item)=>{
    if(item.payload.doc.data().author==JSON.parse(localStorage.getItem('user')).email){
      return item}

  });
  console.log(array);
}

if (args === 'lastWeek'){
  return array.filter((item)=>{
    let BDdate =item.payload.doc.data().date.seconds*1000;
    let now=new Date().getTime();
    let oneWeek=6.048e+8;
    if(now-BDdate<=oneWeek){
      console.log(BDdate);
      console.log(now);
      return item}

  });
  console.log(array);
}



if (args === 'lastMonth'){
  return array.filter((item)=>{
    let BDdate =item.payload.doc.data().date.seconds*1000;
    let now=new Date().getTime();
    let oneMonth=2.628e+9;
    if(now-BDdate<=oneMonth){
      console.log(BDdate);
      console.log(now);
      return item}

  });
}
}}
