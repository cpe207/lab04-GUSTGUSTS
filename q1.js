function typeChecker(a, b) {
    const x1 = typeof a;
    const x2 = typeof b;
    if (x1 === x2) {
        if(x1 === "number"){return 655;}
       else if(x1 === "string"){
            return "I LOVE YOU"}
          
          
            }
    
    else {
        return "NOT MATCHED";
    }
}
//Test cases
var a1 = "Jack";
var b1 = "Rose";
var a2 = 555;
var b2 = 100;
var a3 = "Jack";
var b3 = 100;
console.log(typeChecker(a1, b1));
console.log(typeChecker(a2, b2));
console.log(typeChecker(a3, b3));
module.exports = typeChecker;
