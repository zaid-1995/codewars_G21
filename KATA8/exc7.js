function findMultiples(integer, limit) {
    const multiples = [];
  
    for (let i = integer; i <= limit; i += integer) {
      multiples.push(i);
    }
  
    return multiples;
  }
  
  const integer = 2;
  const limit = 6;
  const result = findMultiples(integer, limit);
  console.log(result);