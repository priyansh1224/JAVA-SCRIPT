// the this keyword in java script is a special keyword that refers to the context in which the current code is being executed..
// Its value depends on how the function where this is used is called.

//1: global context (outside any function)
// in browser:window
// in node.js: module's exports objects
//******************************************************************************************************************************* */

//2: Inside a function
//i:(non-strict mode)
// when this is used inside a reguler function.it refers to thr globle object....
// ii. strict mode
// this will be undefined inside a function....

//************************************************************************************************************************************ */


//3: inside a method (object context)
// when this is used inside an object's method,it refers to the object that..

// const obj={
//     name:"rohit",
//     age:20,
//     greet:function(){
//         console.log(this.name);
//     }
// }
// obj.greet();
//********************************************************************************************************************************* */
// Arrow function don't have their own this.
// instead, they inherit this from the surrounding(lexical)scope.



// let obj={
//     nam:"rohit",
//     age:11,
//     greet:()=>{
//         console.log(this)
//     }
// }

let obj={
    name:"rohit",
    age:11,
    greet:function(){
        let ab=()=>{
            console.log(this);
        };
        ab();
    }}



//****************************************************************************************************************************8
//  inside a constructor or class
//in constructor  and classes, this refers to the instance of the object being created

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let a=new person("rohit",20)
console.log(a)






//  let greet=()=>{
//     console.log(this);
//  }
//  greet();
"use strict"
 let meet=function(){
    console.log(this);
 }
meet();