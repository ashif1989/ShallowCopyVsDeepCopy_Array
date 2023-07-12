// Shallow copy
let arr = [0, 1, 0, 2, 0, 3, 0, 4];

let arr1 = arr;
console.log("Shallow copy");
console.log(arr);
console.log(arr1);

arr1[0] = 100;

console.log("Output");
console.log(arr);
console.log(arr1);

//deep copy
let arr2 = [0, 1, 0, 2, 0, 3, 0, 4];
let arr3 = JSON.parse(JSON.stringify(arr2));

console.log("Deep copy");
console.log(arr2);
console.log(arr3);

arr3[0] = 100;

console.log("Output");
console.log(arr2);
console.log(arr3);
