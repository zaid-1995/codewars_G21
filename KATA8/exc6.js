function removeDuplicates(nums) {
  const seen = new Set();
  const result = [];
  for (const num of nums) {
    if (!seen.has(num)) {
      result.push(num);
      seen.add(num);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 1, 2])); 
console.log(removeDuplicates([1, 2, 1, 1, 3, 2]));
