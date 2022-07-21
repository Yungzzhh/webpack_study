interface obj {
  a?:number
}

const p6: obj = {
  a:1
}
const p7: obj = Object.create(p6)
// console.log(p7);

function test(val: string):void {
  switch (val) {
    case 'unshift':
    case 'push':
      console.log(1);
      break;
    default:
      break;
  }
}
// test('unshift')
const arr_test: Array<number> = [1,2,3,4,5,6]
const arr_log: Array<number> = arr_test.slice(2)
console.log(arr_log);

export {}