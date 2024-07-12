const shoppingCart=[
    {
        courseName:"js cours",
        prisce:1000,
    },
    {
        courseName:"py cours",
        prisce:3000,
    },
    {
        courseName:"java cours",
        prisce:6000,
    },
    {
        courseName:"data science cours",
        prisce:10000,
    },
];
const total = shoppingCart.reduce((acc,item)=>{
    return acc + item.prisce
},0)
console.log(total);