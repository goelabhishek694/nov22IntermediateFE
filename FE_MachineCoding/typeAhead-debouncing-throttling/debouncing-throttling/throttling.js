let pizzaPrice=500;
//this coupon can only be applied after 2 hours;
function apply60Coupon(){
    console.log(`New Price-> ${0.4*pizzaPrice}`);
}

//redis -> cache , fast , expiry 
function throttle(fn,delay){
    let flag=true; // this is going to be xecuted only once
    return function(...args){
        if(flag){
            fn(...args)
            console.log("coupon has been applied");
            flag=false; //toggle
            setTimeout(()=>{
                flag=true;
            },delay)
        }
        else console.log("not allowed to apply coupon");
    }
}

const throttleApplyCoupon=throttle(apply60Coupon,2000);

throttleApplyCoupon();
throttleApplyCoupon();
throttleApplyCoupon();
