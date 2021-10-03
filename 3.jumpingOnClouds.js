// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. 
// The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. 
// The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. 
// It is always possible to win the game.

// Example 
// c = [0,1,0,0,0,1,0]

// Index the array from 0...6 . The number on each cloud is its index in the list so the player must avoid the clouds at indices 1 and 5.
//  They could follow these two paths: 
//          0 -> 2 -> 4 -> 6 
// or 
//          0 -> 2 -> 3 -> 4 -> 6. 
// The first path takes 3 jumps while the second takes 4. Return 3 .


tArray1 = [0, 1, 0, 1, 0, 1, 0]     // 0 2 4 6  -> 3
tArray2 = [0, 1, 1, 1, 0, 1, 0]     // 0 4 6    -> 2
tArray3 = [0, 1, 0, 0, 0, 0, 0]     // 0 2 4 6  -> 3
tArray4 = [0, 0, 0, 0, 1, 0]        // 0 2 3 5  -> 3
tArray5 = [1, 1, 0, 0, 0, 0]        // 2 4 5    -> 2
tArray6 = [1, 0, 1, 0, 0, 0]        // 1 3 5    -> 2
tArray7 = [0, 1, 1, 1, 0]           // 0 4      -> 1
tArray8 = [0, 0, 0, 1, 0, 0]        // 0 4      -> 1

function jumpingOnClouds(c) {
    let path = []
    let index = 0
    while (index < c.length) {
        if (c[index] === 0) {
            path.push(index)
            if (c[index + 2] == 0) {
                index = index + 2
            } else {
                index++
            }
        } else {
            index++
        }
    }
    return path.length - 1
}

console.log(jumpingOnClouds(tArray4))