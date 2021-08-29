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

const canSum = (targetSum, numbers, memo = {}) => {
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

console.log(canSum(7, [2,3])) // true
console.log(canSum(7, [5,3,4,7])) // true
console.log(canSum(7, [2,4]))   // false
console.log(canSum(8, [2,3,6])) //true
console.log(canSum(300, [7,14]))    //false