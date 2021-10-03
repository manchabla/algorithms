// [1 1 1]  0 0 0
// 0 [1] 0   0 0 0
// [1 1 1]  0 0 0
//  0 0 2   4 4 0
//  0 0 0   2 0 0
//  0 0 1   2 4 0

function hourglassSum(arr) {

    let sumOfHourglasess = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[j + 1] && arr[j + 2] && arr[i + 1] && arr[i + 2]) {
                let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
                sumOfHourglasess.push(sum)
            }
        }
    }
    return Math.max(...sumOfHourglasess)
}

const tArray = [[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]
console.log(hourglassSum(tArray))