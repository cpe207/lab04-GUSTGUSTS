function primeNumber(a) {
    for(let i = 2; i <=1000; i++){
        if(a % i === 0) {if(i<a){return "NO";}else{return "YES"}
    
    }}
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
