const countConstructMemoization = (target, workBank, memo = {})=>{
    if(target === '') return 1

    if(target in memo) return memo[target]
    else memo[target] = 0

    for( let w of workBank){
        if(target.indexOf(w) === 0){
            memo[target] += countConstruct(target.slice(w.length), workBank, memo)            
        }
    }
    return memo[target]
}

const countConstructTabulation = (target, wordBank) =>{
    let grid = Array(target.length + 1).fill(0)
    grid[0] = 1

    for (let i = 0; i < target.length; i++) {
        if(grid[i] > 0){
            for (const w of wordBank) {  
                if(target.slice(i, w.length + i) === w){                    
                    // console.log(`${sub} - ${w}`)
                    grid[w.length + i] += grid[i]
                }
            }   
        }
         
    }

    return grid[target.length]
}


const countConstruct = (target, wordBank) =>{
    return countConstructTabulation(target, wordBank)
}

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 't', 'ska', 'boar'])); // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
    'e', 
    'ee', 
    'eee', 
    'eeee', 
    'eeeee',
    'eeeeee'])); // 0
