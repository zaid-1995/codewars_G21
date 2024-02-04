// let myWeakMap = new WeakMap();

// let obj = {
//     name: 'Zaid'
// };

// myWeakMap.set(obj, 'value');
// console.log(myWeakMap.has(obj));

function countDown(number) {
    
  console.log(number);
  let newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber);
  }

};

countDown(4);
