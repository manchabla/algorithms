// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    let i = 0
    let grouppingCharacters = []
    let sArray = S.split('')
    while (i < sArray.length) {
        grouppingCharacters.push(sArray.filter(el => sArray[i] === el))
        sArray = sArray.filter(el => sArray[i] !== el)
        i++
    }
    let count = 0
    for (let i = 0; i < grouppingCharacters.length; i++) {
        if (grouppingCharacters[i].length % 2 !== 0) {
            count++
        }
    }
    return count
}

tString1 = "acbcbba"
tString2 = "axxaxa"
tString3 = "aaaa"

console.log(solution(tString2))