const arr1 = [1,2,3,4,5,6]
const arr2 = ['hello','hy','welcome']
console.log(arr1.concat(arr2));
console.log(arr1.length);

const another_array=[1,2,3,4,[5,6],7,8,[10,[11,12,13],14],15]
const flat_array = another_array.flat(Infinity);
console.log(flat_array);