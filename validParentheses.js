/*
    Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

    Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true

    Constraints
    0 <= input.length <= 100
*/

function validParentheses(parens){
    // Solution 1
    // while(parens.test(/\(\)/))
    // {   
    //     parens = parens.replace(/\(\)/, '')
    // }
    // return str.length == 0

    //Solution 2
    let count = 0
    for (let i = 0; i < parens.length; i++) {
        let p = parens[i]
        if(p == "(") count++
        if(p == ")") count--
        if(count < 0) return false
    }

    return count == 0
}

console.log(validParentheses(")))((("))