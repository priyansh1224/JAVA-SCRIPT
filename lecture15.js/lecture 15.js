// let user={
//     name:"rohit",
//     age:30
// }
// console.log(Object.getOwnPropertyDescriptor(user,"name"))


// // //for of loop on js
// const arr=[10,20,30,45,32];
// for(let value of arr){
//     console.log(value)
// }

// let str="rohit is good boy";
// for(let value of str){
//     console.log(value)
// }
// const obj={
//     name:"chhavi",
//     age:22,
//     gender:"female"
//  }
// // for (let value of obj){
// // console.log(obj);
// for(let value of Object.keys(obj))
//     console.log(value,obj[value]);

// // 

//maps in java script
// the use of map in js is to return somthing during call that function..

// const arr=[1,2,3,4]
// const result=arr.map((num)=>{
//     return num*num
// });
// console.log(result);


const arr=[1,2,3,4,5,6];
const result=arr.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);
console.log(result);
// for each main kuch bhi return in nhi hota hai jabki map main hm kuch bhi return kr skate hai with the help of arrow function..