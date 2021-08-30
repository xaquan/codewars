/**
 * 2D Grid. Begin in the top-left corner and your goal is
 * travel to bottom-right corner. 
 * You only move down or right.
 * 
 * How many way to travel to the bottom of the grid
 * 
 *  grid(2,3)
 * 
 */


const gridTravelMemorization = (n,m, memo= {}) => {
    // Create key for storage
    const key = `${n},${m}`
    // Return 0 when move outside the grid
    if(n == 0 || m == 0) return 0

    // Return 1 when the grid is 1 cell or moved to the end
    if(n == 1 && m == 1) return 1

    if(key in memo) return memo[key]

    const down = gridTravel(n-1, m, memo)
    const right = gridTravel(n, m-1, memo)

    // Sum the ways count from down and right
    memo[key] = down + right
    
    return memo[key]
}

const gridTravelTabulation = (n, m) => {

    let grid = Array.from(Array(n+1), () => Array(m+1).fill(0))
    grid[1][1] = 1


    for (let down = 1; down <= n; down++) {
        for (let right = 1; right <= m; right++) {
            let current = grid[down][right]
            if(right < m) grid[down][right+1] += current
            if(down < n)grid[down+1][right] += current
        }
    }
    return grid[n][m]
}

const gridTravel =  (n, m) => {
    return gridTravelTabulation(n, m)
}

console.log(gridTravel(1,1)); //1
console.log(gridTravel(2,3)); //3
console.log(gridTravel(3,2)); //3
console.log(gridTravel(3,3)); //6
// console.log(gridTravel(18,18)); //2333606220