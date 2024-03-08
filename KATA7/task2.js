var number=function(array){
    return array.map((arr, index) => `${index + 1}: ${arr}`);
  };
  
  const array = [
    "This is the first line.",
    "And this is the second line.",
    "Finally, the third line."
  ];
  
  console.log(number(array));


//   second method 
  var number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }


//   third method with function
var number = function(arr) {
    var newArr = [];
      if (arr.length === 0) {
        return [];
      } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
          newArr.push((i + 1) + ': ' + arr[i]);
        }
      }
      return newArr;
    }

// multiply th number
    function multiply(number){
      //your code here
    }
    
    function multiply(number) {
        const digitsPower = Math.pow(5, Math.abs(number).toString().length);
        return number * digitsPower;
    }
    
    // Test cases
    console.log(multiply(3));   // Output: 15
    console.log(multiply(10));  // Output: 250
    console.log(multiply(200)); // Output: 25000
    console.log(multiply(0));   // Output: 0
    console.log(multiply(-3));  // Output: -15
