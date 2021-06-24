// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. 
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, 
// oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. 
// oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5. 

function oddishOrEvenish(num) {
    let sum = 0
	num = num.toString().split('')
    num.forEach(int => {
        int = parseInt(int)
        sum = sum + int
    })
    return sum%2 === 0 ? 'Evenish' : 'Oddish'
} 

console.log(oddishOrEvenish(43), "Oddish");
console.log(oddishOrEvenish(373), "Oddish");
console.log(oddishOrEvenish(55551), "Oddish");
console.log(oddishOrEvenish(694), "Oddish");
console.log(oddishOrEvenish(4433), "Evenish");
console.log(oddishOrEvenish(11), "Evenish");
console.log(oddishOrEvenish(211112), "Evenish");