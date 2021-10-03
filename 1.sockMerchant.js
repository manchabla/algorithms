// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Returns
// int: the number of pairs 
// Example
//      n   = 9
//      ar  = [10, 20, 20, 10, 10, 30, 50, 10, 20]
//  output = 3

const t = "50 49 38 49 78 36 25 96 10 67 78 58 98 8 53 1 4 7 29 6 59 93 74 3 67 47 12 85 84 40 81 85 89 70 33 66 6 9 13 67 75 42 24 73 49 28 25 5 86 53 10 44 45 35 47 11 81 10 47 16 49 79 52 89 100 36 6 57 96 18 23 71 11 99 95 12 78 19 16 64 23 77 7 19 11 5 81 43 14 27 11 63 57 62 3 56 50 9 13 45"
let tArray1 = t.split(" ").map(el => parseInt(el, 10))
let tArray2 = [1, 1, 1, 2, 2, 3];

function sockMerchant(arr) {
    let equalsEl = []
    while (arr[0]) {
        const sock = 0
        equalsEl.push(arr.filter(el => arr[sock] === el))
        arr = arr.filter(el => arr[sock] !== el)
        if (arr.length === 1) {
            equalsEl.push(arr)
        }
    }

    return equalsEl.map(arr => parseInt(arr.length / 2)).reduce((a, b) => a + b)
}

console.log("pairs: ", sockMerchant(tArray1))