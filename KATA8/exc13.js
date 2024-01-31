let str = 'ABBACC';
let arr = [];

for (let i = 0; i < str.length; i++){
    if (arr.includes(str[i])){
        console.log(str[i]); break
    }
    arr.push(str[i]);
}
