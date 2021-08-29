// Calculate Fibonacci number
//  Input number and store


const fib = (n, memo = {})=>{
    // Return 0 if n is 0
    if(n == 0 ) return 0
    // Return 1 if n < 2
    if( n < 2 ) return 1


    // Return if number that already calculated
    if ( n in memo) return memo[n]

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

console.log(fib(7));
console.log(fib(2));
console.log(fib(13));
console.log(fib(25));
console.log(fib(50));