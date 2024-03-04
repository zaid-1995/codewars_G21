function positiveSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}

let arr = [1, -4, 7, 12];
let result = positiveSum(arr);
console.log(result);