let a = 10;
let b = 20;

console.log(eval(a+b));
console.log(`${a+b}`);

setInterval(() => {
    let time = new Date();
    console.log(`Current time: ${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`); 
}, 1000);