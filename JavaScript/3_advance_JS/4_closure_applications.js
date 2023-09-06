//inifnite currying

// console.log(counter(0)) //1
// console.log(counter()(0)) //2
// console.log(counter()()(0)) //3
// console.log(counter()()()(0)) //4
// console.log(counter()()()()()(0)) //6

function counter(args){
    let count=0;
    count++;
    if(args==0){
        return count;
    }
    else{
        return function inner(args){
            count++;
            if(args==0){
                return count;
            }
            else return inner
        }
    }
}

//memoization 

function calc(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

// console.time();
// let res=calc(100000);
// console.log(res);
// console.timeEnd()


function memoize(fn){
    let cache={};
    return function(n){
        let isAnsPresent=cache[n];
        if(isAnsPresent!=undefined){
            return cache[n];
        }
        else{
            const result=fn(n);
            cache[n]=result;
            return result;
        }
    }
}

// let efficientCalculatorFn=memoize(calc);
// console.time();
// efficientCalculatorFn(100000);
// console.timeEnd()

// console.time();
// efficientCalculatorFn(100000);
// console.timeEnd()


/***************Private variables******/
function createEvenStack() {
    const items=[];
    return {
        push(item) {
            if (item % 2 == 0) {
                console.log("Is pushed");
                items.push(item);
            }
            else {
                console.log("Please input even value");
            }
        },
        pop() {
            return items.pop();
        }
    };
}
//change to shift unshift 
const stack = createEvenStack();
stack.push(10);
// stack.push(5);
// stack.pop();
stack.items; // => [10]
console.log(stack.items);
stack.items = [10, 100, 1000]; // prevent this behaviour
console.log(stack.items);


