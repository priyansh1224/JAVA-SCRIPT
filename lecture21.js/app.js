//<Li>ts</li>

// to create any element in html from java script

// let element=document.createElement('li')
// element.innerHTML="ts"

// const parent=document.getElementById("root");
// parent.appendChild(element);




// // ***********************************************************************************************


// // we can also make a function for this ..
// function attach(content){
//     let element=document.createElement('li')
// element.innerHTML=content

// const parent=document.getElementById("root");
// // only one chid attechd 
// parent.appendChild(element);
// // we can also use this node for atteched to many text or somthing in file..
//      parent.append(element,"Hello coder army");

// }
// attach("REact");
// attach("git")

// *********************************************************************************


// text node
// const element=document.createTextNode("hello coder army");
// const parent=document.getElementById("root");
// parent.append(element);

// ***************************************************************************************



//     create attribute node

// const element=document.createAttribute("id");
// element.value="first";

// access to first list....
// const curr_list=document.querySelector('li')
// curr_list.setAttributeNode(element);


// access to second list..

// const parent=document.getElementById("root");
// parent.children[1].setAttributeNode(element);


//access attribute of a element..
const element=document.getElementById("root");
console.log(element.getAttribute("style"));
