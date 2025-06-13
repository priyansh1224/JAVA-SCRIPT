// // reduce in js..
// const arr=[10,20,30,40,59];

// //const result=arr.reduce(callback function, initalization )
// const result=arr.reduce((acc,curr)=>{
//     console.log(acc,curr)
//     acc=acc+curr;
//     return acc;
// },0)

// console.log(result);

//real world case.

//here we take an example for counting any entities.that 
let arr=["orange","apple","banana","orange","apple","banana","mango"]

const result=arr.reduce((acc,curr)=>{
    // if(acc.hasOwnProperty(curr))
    //     acc[curr]++;
    // else
    //   acc[curr]=1;
    acc.hasOwnProperty(curr)? acc[curr]++:acc[curr]=1;
    return acc;
},{orange:2})
console.log(result)


// let obj={
//     name:"rohit",
//     age:10
// }
// console.log(obj.hasOwnProperty("class"))