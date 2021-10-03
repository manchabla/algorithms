// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(cars) {

    function moveElement(arr, from, to) {
        var copy = arr[from]
        arr.splice(from, 1)
        arr.splice(to, 0, copy)

        return arr
    }

    let index = 0
    let similarities = []
    while (index < cars.length) {
        let counter = 0
        if (cars[index++] && cars[index]) {
            for (let i = 0; i < cars[index].length; i++) {
                if (cars[index++][i] == cars[index][i]) {
                    counter++
                }
            }
        }
        cars = moveElement(cars, index, cars.length)
        similarities.push(counter)
        counter = 0
        index++
    }

    return similarities

}

tArray1 = ["100", "110", "010", "011", "100"]
console.log(solution(tArray1))

// NO TERMINADO