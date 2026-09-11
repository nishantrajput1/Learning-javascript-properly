const cart = ["shirt","pant","jeans"];
createOrder(cart)
.then(function(orderId){
    console.log("Order Id : "+ orderId);
    return orderId;
})
.then(function(orderId){
    // ab order id aagyi hai
    return proceedtoPayment(orderId);
    // proceed to payment hai ab
})
.then(function(payment){
    console.log("Order Summary : ");
    console.log(payment);
    const balance = 500;
    return balance;
})
.then(function(balance){
    return updateBalance(balance);
})
.then(function(res){
    console.log("Final status : "+ res);
})
.catch(function(err){
    console.log("Error : "+err.message);
})

// ye ek api banani hai hame

function createOrder(cart){
    return new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("Invalid Cart");
            reject(err);
        }
        const orderId = '123';
        resolve(orderId);
    });
}
function validateCart(cart){
    return true;
}
function proceedtoPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    })
}
function updateBalance(balance){
    const pr = new Promise(function(resolve,reject){
        if(balance<0){
            reject("Insufficient balance");
        }
        setTimeout(function(){
            const curr = document.getElementById("balance");
            curr.innerText = 500;
            resolve("Balance updated successfully");
        },5000);
    })
    return pr;
}