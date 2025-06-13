//  call back hell

// fetchuser(greet)

// Domino's pizza order kar rahe ho:

// callback = ()=>{
//     preparingOrder();
// }




function placeOrder(callback){
    console.log("Talking with Domino's");
    
    setTimeout(()=>{
     console.log("Order Placed Succesfully");
     callback();
    },2000)
}

function preparingOrder(callback){
    console.log("Pizza preparation started....");

    setTimeout(()=>{
        console.log("Pizza preparation Done");
        callback();
       },5000)
};

function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")

    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
       },3000)
}

function deliverOrder(callback){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
        callback();
    },5000)
}

function ratingOrder(callback){
        console.log("give a start rating.......")

        setTimeout(()=>{
            console.log("THAnku for orderning food.. meet you again..")
            callback();

        },50000)
}

// placeOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder(()=>{
                ratingOrder();
            });
        });
    })
});

// callback hell







