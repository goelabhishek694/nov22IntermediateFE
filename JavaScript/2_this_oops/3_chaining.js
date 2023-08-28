var humans=10;
let humanChain = {
    humans: 1,
    catch() {
        this.humans++;
        return this
    },
    detach() {
        this.humans--;
        return this
    },
    showHumans: function () {
        console.log(this.humans);
    }
};

console.log(humanChain.humans);
// humanChain.catch();
// humanChain.catch();
// humanChain.catch();
// humanChain.catch();
// humanChain.detach();
// console.log(humanChain.humans); 

humanChain.catch().catch().catch().catch().detach();
console.log(humanChain.humans);

//we return this to make our function dynamic 
let myfn=humanChain.catch;
let val=myfn();
console.log(humans);
console.log(val);
