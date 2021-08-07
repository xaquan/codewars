/*
    Link https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

    Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let words = x.split(' ')
    let highest = 0
    let result = ""

    words.forEach(w => {        
        let cache = 0
        for (let i = 0; i < w.length; i++) {
            // const c = w[i];
            cache += w.charCodeAt(i) - 96
        }
        // console.log(w)
        // console.log(cache)
        if(cache > highest)
        {            
            
            // console.log(cache)
            // console.log(w)
            highest = cache
            result = w
        }
    });
    
    return result
}

console.log(high('hat time are we climbing up the volcano'))