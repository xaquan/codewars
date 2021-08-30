// Calculate Fibonacci number
//  Input number and store

const fibMemoization = (n, memo = {})=>{
    // Return 0 if n is 0
    if(n == 0 ) return 0
    // Return 1 if n < 2
    if( n < 2 ) return 1


    // Return if number that already calculated
    if ( n in memo) return memo[n]

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
}

const fibTabulation = (n, memo ={}) => {
    if(n == 0) return 0

    let store = Array(n+1).fill(0)
    store[1] = 1
    
    for(let i = 0; i<=n; i++){
        const n0 = store[i] 
        store[i+1] += n0
        store[i+2] += n0
    }
    
    // console.log(store);
    return store[n]
}

const fib = (n) => {
    return fibTabulation(n)
}

console.log(fib(7));
console.log(fib(2));
console.log(fib(13));
console.log(fib(25));
console.log(fib(50));