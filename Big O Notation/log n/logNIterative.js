// O(log n)
function logFunc(n) {
  let result = 0

  while (n > 1) {
    n = Math.floor(n / 2)
    result++
  }
  return result
}

const log8 = logFunc(8)
console.log(log8)
