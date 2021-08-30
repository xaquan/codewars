const bestSumMemoization = (targetSum, numbers, memo = {})=>{
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

const bestSumTabulation = (targetSum, numbers) => {
    let grid = Array(targetSum + 1).fill(null)
    grid[0] = []

    for (let i = 0; i < targetSum; i++) {
        for (const n of numbers) {
            let current = grid[i]

            if(current !== null){
                let combination = [...current, n]
                if(i+n <= targetSum) 
                    if(grid[i+n] === null || grid[i+n].length > combination.combination)
                        grid[i+n] = combination
            }
        }
    }
    return grid[targetSum]
}

const bestSum = (targetSum, numbers) =>{
    return bestSumTabulation(targetSum, numbers)
}


console.log(bestSum(7, [5,3,4,7])); // [7]
console.log(bestSum(8, [2,3,5]));   // [3,5]
console.log(bestSum(8, [1,4,5])); //[4,4]
console.log(bestSum(100, [1,2,5,25])); //[25,25,25,25]