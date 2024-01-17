function sumWithoutMinMax(arr) {
    if (!Array.isArray(arr) || arr.length < 3) {
      return "Invalid input. Please provide an array with at least three elements.";
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    const sum = arr.reduce((acc, num) => {
      if (num !== min && num !== max) {
        acc += num;
      }
      return acc;
    }, 0);
  
    return sum;
  }
  
  const numbers = [4, 8, 1, 5, 9];
  const result = sumWithoutMinMax(numbers);
  console.log(result);
  