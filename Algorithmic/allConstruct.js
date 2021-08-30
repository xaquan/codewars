const allConstructMemoization = (target, workBank, memo = {})=>{
    if(target === '') return [[]]

    if(target in memo) return memo[target]
    else memo[target] = []

    let result = []

    for( let w of workBank){
        if(target.indexOf(w) === 0){
            let suffixWays = allConstruct(target.slice(w.length), workBank, memo)
            let targetWays = suffixWays.map(way => [w, ...way])
            // let targetWays = []

            // for(let way of suffixWays){
            //     way = [w, ...way]
            //     targetWays.push(way)
            // }
            result.push(...targetWays)
            
            // console.log(memo[target])
        }
               
    }    

    memo[target] = result
    return memo[target]
}

const allConstructTabulation = (target, wordBank) =>{
    let grid = Array(target.length + 1).fill().map(()=>[])
    grid[0] = [[]]

    for (let i = 0; i <= target.length; i++) {
        const current = grid[i]
        for (const w of wordBank) {  
            if(target.slice(i, w.length + i) === w){    
                let next = grid[w.length + i]
                let newCombination = current.map(combination => [...combination, w])
                // grid[w.length + i] = [w.length + i]
                // console.log(newCombination)  
                next.push(...newCombination)
                // grid[w.length + i] = next
                // grid[w.length + i].push(...['d', 'w'])
                  
            }
        }          
    }

    return grid[target.length]
}


const allConstruct = (target, wordBank) =>{
    return allConstructTabulation(target, wordBank)
}


console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
// console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
// console.log(allConstruct('skateboard', ['bo', 'rd', 't', 'ska', 'boar'])); // 0
// console.log(allConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
//     'e', 
//     'ee', 
//     'eee', 
//     'eeee', 
//     'eeeee',
//     'eeeeee'])); // 0
