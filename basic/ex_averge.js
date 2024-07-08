//first prectice
// const mark=[20,50,80,33,55,88,99,10]
// let sum=0;
// for(let val=0;val<mark.length;val++){
//     sum =mark[val] + sum;
// }
// console.log(sum);
// const aveg=sum/mark.length;
// console.log(`avrge mark : ${aveg}`);

// second practice

const price=[900,300,200,100,500]

for(let i=0;i<price.length;i++){
    let offer=price[i]/10;
    price[i] = price[i] - offer;
}
console.log(price);


// third practice
const compaines=["bloomberg","microsoft","uber","google","ibm","netflix"]
console.log(compaines.shift());
console.log(compaines);
console.log(compaines.splice(2,1,"Ola"));
console.log(compaines)
console.log(compaines.push("amezone"))
console.log(compaines)