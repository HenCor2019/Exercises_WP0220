function removeDuplicates(arr) {
  const removedDuplicates = new Set(arr)
  return Array.from(removedDuplicates)
}

const test1 = [2,1,1,5,6,6]
const responseTest1 = removeDuplicates(test1)

console.log(responseTest1)


const test2 = [1,1,1,5,6,6,7,8,9,11]
const responseTest2 = removeDuplicates(test2)

console.log(responseTest2)
