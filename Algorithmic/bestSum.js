const bestSum = (targetSum, numbers, memo = {})=>{
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    if(targetSum in memo) return memo[targetSum]

    let shortest = null

    for(let n of numbers){

        const targetSumResult = bestSum(targetSum - n, numbers, memo)
        if(targetSumResult !== null){
            const temp = [ ...targetSumResult, n ]
            if(shortest === null || temp.length < shortest.length){
                shortest = temp
            }
        }
    }
    memo[targetSum] = shortest
    return shortest
}

console.log(bestSum(7, [5,3,4,7])); // [7]
console.log(bestSum(8, [2,3,5]));   // [3,5]
console.log(bestSum(8, [1,4,5])); //[4,4]
console.log(bestSum(100, [1,2,5,25])); //[25,25,25,25]