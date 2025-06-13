//          a set in js is a collection of uniqye values .it aalows you to stor values duplicates 
//           which makes it differnt from arrays.the value in a set can be of any type,such as
//           primtive9numbers,string, etc)or object.
//add,
//delete 
//has
//size
//clear

// const set1=new Set([10,30,450,10,34,32]);
// console.log(set1);

// const set1=new Set();
// set1.add(4);
// set1.add(6);
// set1.add("rohit");
// set1.add(30);



//  to convert an array into set, set into array to reomove duplicat itmes from array.. just write..
// let arr=[10,3,4,5,5,323,43];
// const set1=new Set(arr);
// arr=[...set1];
// console.log(arr);

let set1=new Set([1,2,3,4,5]);
let set2=new Set([2,5,3,6,7,8]);
//union of two sets..

// let set3=new Set([...set1,...set2]);
// console.log(set3);


//intersection
//filter:array
const result=new Set([...set1].filter((num)=>set2.has(num)));
console.log(result);

//iterate over set
//for of
for(let value of set1)
    console.log(value)