// A left rotation operation on an array of size  shifts each of the array's elements n unit to the left. Given an integer, 
// d, rotate the array that many steps left and return the result.


// Example
// d = 2
// arr = [1,2,3,4,5]
// After 2 rotations, [3,4,5,1,2].

// input 
// 5 4 
// 1 2 3 4 5

// output
// 5 1 2 3 4

function leftRotation(d, arr) {
    let newArray = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        let newPosition = (i - d) < 0 ? i - d + arr.length : i - d
        console.log(`oldPos ${i} newPos ${newPosition}`)
        newArray[newPosition] = arr[i]
    }
    return newArray
}

arrTest1 = [1, 2, 3, 4, 5]
arrTest2 = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]

console.log(leftRotation(10, arrTest2))