let str = 'ABBACC';
let arr = [];

for (let i = 0; i < str.length; i++){
    if (arr.includes(str[i])){
        console.log(str[i]); break
    }
    arr.push(str[i]);
}


let array = [
    {id: 1, name: 'Zaid'},
    {id: 2, name: 'Ali'},
    {id: 3, name: 'Sophia'},
    {id: 4, name: 'Muhammad'},
]

let onSearch = (input) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].name.includes(input.toUpperCase()) || (array[i].name.includes(input.toLowerCase())))
        newArray.push(array[i])
    }
    console.log(newArray);
} 
onSearch('i')