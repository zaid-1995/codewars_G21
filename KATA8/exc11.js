function removeEverySecondElement(array) {
    return array.filter((element, index) => index % 2 === 0);
  }
  
  const originalArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];
  const newArray = removeEverySecondElement(originalArray);
  
  console.log(newArray);
  