function repeatCharacters(input) {
    let result = '';
    for (let i = 0; i < input.length; i++) {
      result += input[i] + input[i];
    }
    return result;
  }
  
  console.log(repeatCharacters("String"));
  console.log(repeatCharacters("Hello World"));
  console.log(repeatCharacters("1234!_ "));