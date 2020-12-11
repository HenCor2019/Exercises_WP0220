// 1 2 3 4 5 6 7 8 9 10
// n*((n+1)/2)

const findMissing = (arr) => {

  const finalValue = arr[arr.length-1]
  const totalSum = finalValue*(finalValue+1)/2
  const arrSum = arr.reduce((acc,current) => acc+current,0)
  
  return totalSum - arrSum
}

const test1 = [0,1,2,3,4,5,6,7,8,9,11]
let missingNumber = findMissing(test1)
console.log('Numero faltante: ',missingNumber)

const test2 = [0,1,2,3,4,5,6,7,9,10]
missingNumber = findMissing(test2)
console.log('Numero faltante: ',missingNumber)

const test3 = [0,1,2,4,5,6,7,8,9,10]
missingNumber = findMissing(test3)
console.log('Numero faltante: ',missingNumber)
