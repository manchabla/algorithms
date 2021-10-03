// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly s steps,
//  for every step it was noted if it was an uphill, , or a downhill,  step.
//   Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example

// 8 steps path = DDUUUUDD
// Returns
// int: the number of valleys traversed

// tArray = ["U", "D", "D", "D", "U", "D", "U", "U"]
// tArray2 = ["D", "U"]

function countingValleys(path) {
    path = path.split("")

    const D = -1
    const U = 1
    let valleyCount = 0
    let Icount = 0

    function converter(str) {
        switch (str) {
            case "U":
                return U

            case "D":
                return D
        }
    }

    let convertedPath = path.map(step => converter(step))

    for (let index = 0; index < convertedPath.length; index++) {
        Icount += convertedPath[index]
        if (Icount < 0 && Icount + convertedPath[index + 1] === 0) {
            valleyCount++
        }
    }

    return valleyCount
}

console.log(countingValleys("DDUUUUDD"))