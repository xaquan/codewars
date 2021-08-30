const howSumMemorization = (targetSum, numbers, memo = {})=>{
    if(targetSum === 0) return []
    if(targetSum < 0) return null
    if(targetSum in memo) return memo[targetSum]

    for(let n of numbers){
        const targetSumResult = howSum(targetSum - n, numbers, memo)
        if(targetSumResult !== null){
            memo[targetSum] = [ ...targetSumResult, n ]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

const howSumTabulation = (targetSum, numbers) => {
    let grid = Array(targetSum + 1).fill(null)
    grid[0] = []

    for (let i = 0; i < targetSum; i++) {
        for (const n of numbers) {
            let current = grid[i]

            if(current !== null){
                if(i+n <= targetSum) grid[i+n] = [...current, n]
            }
        }
    }
    return grid[targetSum]
}

const howSum = (targetSum, numbers) =>{
    return howSumTabulation(targetSum, numbers)
}

console.log(howSum(7, [2,3])); // [3,2,2]
console.log(howSum(7, [5,3,4,7])); // [4,3]
console.log(howSum(7, [2,4]));   // null
console.log(howSum(8, [2,3,6])); //[2,2,2,2]
console.log(howSum(300, [7,14])); //null