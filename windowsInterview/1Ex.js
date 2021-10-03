function solution(N) {

    function getSumOfDigit(n) {
        return n.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b))
    }

    function getMinNumber(n) {
        i = true
        doubleOfn = n + n
        increaser = N
        while (i) {
            if (getSumOfDigit(increaser) == doubleOfn) {
                i = false;
                return increaser
            } else {
                increaser++
            }
        }

    }
    return getMinNumber(getSumOfDigit(N))
}

console.log(solution(99))