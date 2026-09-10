const cart = ["shoes","pants","kurta"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.catch(function(err){
    console.log("Failed : "+ err.message);
})
.then(function(orderId){
    console.log("Inside the proceed to payment  : "+ orderId);
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(typeof(paymentInfo));
    console.log(paymentInfo);
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Cart not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId)
        {
            
            resolve(orderId);
        }
    })
    return pr;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    })
}

function validateCart(cart){
    return false;
}