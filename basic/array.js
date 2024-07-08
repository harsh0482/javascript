const arr1=[1,2,3,4,5,"hello"];
console.log(arr1.length);
// console.log(arr1);
// arr1.push(6);
console.log(arr1);

const arr2 = arr1.slice(2)
console.log(arr2);

console.log("B",arr1);

const arr3=arr1.splice(0,2)
console.log("c" ,arr1);
console.log(arr3);