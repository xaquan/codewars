const canConstructMemoization = (target, wordBank, memo = {})=>{
        
    if(target in memo) return memo[target]
    if(target === '') return true


    for( let w of wordBank){
        if(target.indexOf(w) === 0){
            memo[target] = canConstruct(target.slice(w.length), wordBank, memo)
            if(memo[target])return true
        }
    }
    memo[target] = false
    return memo[target]
}

const canConstructTabulation = (target, wordBank) =>{
    let grid = Array(target.length + 1).fill(false)
    grid[0] = true

    for (let i = 0; i < target.length; i++) {
        if(grid[i]){
            for (const w of wordBank) {                
                const sub = target.slice(i, target.length)
                if(sub.indexOf(w) === 0){                    
                    // console.log(`${sub} - ${w}`)
                    grid[w.length + i] = true
                }
            }   
        }
         
    }

    return grid[target.length]
}


const canConstruct = (target, wordBank) =>{
    return canConstructTabulation(target, wordBank)
}


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 't', 'ska', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e', 
    'ee', 
    'eee', 
    'eeee', 
    'eeeee',
    'eeeeee'])); // false
