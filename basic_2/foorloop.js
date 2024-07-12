// const arr1=["aa","bb","cc","dd"]
// arr1.forEach(function(val){
//     console.log(val);
// })
const myobject=[
    {
        languageName:"javascript",
        languageFileName:"js",
    },
    {
        languageName:"java",
        languageFileName:"java",
    },
    {
        languageName:"python",
        languageFileName:"py",
    }
]
myobject.forEach((item)=>{
    console.log(item.languageName);
});