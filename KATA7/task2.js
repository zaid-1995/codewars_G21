var number=function(array){
    return array.map((arr, index) => `${index + 1}: ${arr}`);
  };
  
  const array = [
    "This is the first line.",
    "And this is the second line.",
    "Finally, the third line."
  ];
  
  console.log(number(array));