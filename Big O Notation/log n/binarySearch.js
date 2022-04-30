// works only on ordered array
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let start = 0
let end = arr.length - 1

function binarySearch(arr, start, end, target) {
  if (start > end) return false

  // next two lines are for demonstration purpose only
  const newArr = arr.slice(start, end + 1)
  console.log(newArr)

  let middleIndex = Math.floor((start + end) / 2)
  if (arr[middleIndex] === target) return true

  if (arr[middleIndex] < target) start = middleIndex + 1
  else end = middleIndex - 1

  return binarySearch(arr, start, end, target)
}

const target = 1
const exist = binarySearch(arr, start, end, target)
console.log(exist)
