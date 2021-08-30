/**
 * canSum problem
 * Provide n is number and list of numbers
 * Return true if sum number in the list equal to n
 * 
 * @param {number} targetSum
 * @param {number} numbers 
 * @param {object} memo
 * 
 *  
 * 
 */

const canSumMemorization = (targetSum, numbers, memo = {}) => {
    // Return true when TargetSum = 0
    if (targetSum === 0) return true
    
    if(targetSum in memo) return memo[targetSum]

    if(targetSum < 0) return false


    for(let n of numbers){
        memo[targetSum] = canSum(targetSum - n, numbers, memo)
        if (memo[targetSum] == true) return true
    }    

    return false
}

const canSumTabulation = (targetSum, numbers) => {
    let grid = Array(targetSum + 1).fill(false)
    grid[0] = true

    numbers.map(v => grid[v] = true)

    for (let i = 1; i <= targetSum; i++) {
        for(let n of numbers){            
            let current = grid[i]
            if(current){
                if(n+i <= targetSum)grid[n+i] = true
            }
        }
        
    }

    return grid[targetSum]

}


const canSum = (targetSum, numbers) => {
    return canSumTabulation(targetSum, numbers) 
}
console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [5,3,4,7])) // true
console.log(canSum(7, [2,4]))   // false
console.log(canSum(8, [2,3,6])) //true
console.log(canSum(300, [7,14]))    //false