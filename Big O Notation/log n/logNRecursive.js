// O(log n)
function logFunc(n, memory = 0) {
  n = Math.floor(n / 2)
  if (n < 1) return memory
  memory++

  return logFunc(n, memory)
}

const log8 = logFunc(8)
console.log(log8)
