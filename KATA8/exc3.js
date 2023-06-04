// Finding the avarage of a number
let numbers = [5, 10, 15, 20];
let average = findAverage(numbers);

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

console.log(average);