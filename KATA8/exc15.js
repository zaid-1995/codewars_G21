let set = new Set([1, 2, 3, 3, 4, 5]);

set.add("oops");
set.delete(1);
set.clear();
let includes = set.has(3);
let checkSize = set.size;

console.log(set);
