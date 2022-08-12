//reverce way start

 /**---  let factorial = 1;
for(let i=1; i < 5; i++){
    factorial = factorial*i;
}
console.log(factorial);

let factorial = 1;
for(let i=5; i >= 1; i--){
    factorial = factorial*i;
}
console.log(factorial);  --- */

// reverce way end

// recurtion way start

function factorial(i){
    if(i==1){
        return 1;
    }
    return factorial(i--)*i
}
console.log(4);