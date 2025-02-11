function sumer() {
    let total = 0; 

    return function(number) {
        total += number; 
        
        return total;    
        
    };
}

const sum = sumer();

console.log(sum(4));  
console.log(sum(6));  
console.log(sum(10)); 
console.log(sum(7));  
