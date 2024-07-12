// const mynum=[1,2,3,4,5,6,7,8,9,10]

// const mynewnum=mynum.filter((num)=>{
//     return num > 4
// })
// console.log(mynewnum)

const books=[
    {
        bookname:"one book",
        author:"one",
        prisce:1000,
        publis:2001,
    },
    {
        bookname:"two book",
        author:"two",
        prisce:1201,
        publis:2011,
    },
    {
        bookname:"three book",
        author:"three",
        prisce:500,
        publis:1988,
    },
    {
        bookname:"four book",
        author:"one",
        prisce:2000,
        publis:2005,
    },
    {
        bookname:"five book",
        author:"two",
        prisce:400,
        publis:1999,
    },
];

let newbooks = books.filter((book)=>{
    // return book.author==="one" && book.publis > 2001;
    return book.bookname==="one book";
});
console.log(newbooks);