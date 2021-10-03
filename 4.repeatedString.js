// There is a string, S, of lowercase English letters that is repeated infinitely many times. 
// Given an integer, N, find and print the number of letter a's in the first N letters of the infinite string.

// Example
// s = abcac
// n = 10
// output = 4
// The substring we consider is 'abcacabcac', the first  characters of the infinite string. There are 4 occurrences of a in the substring.


function repeatedString(s, n) {
    const stringA = s.split('')
    let i = 0
    let counter = 0
    let aCounter = 0
    while (i < n) {
        if (counter == stringA.length) {
            counter = 0
        }
        if (stringA[counter] === 'a') {
            aCounter++
        }
        counter++
        i++
    }

    return aCounter
}

console.log(a("abcc", 10))