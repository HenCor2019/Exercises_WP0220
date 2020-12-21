// Repartir un numero tal que Alice y Bob tengan el mismo tamaño
const Alice = [7,3,3,4]
const Bob = [6,1,5]


const maxPositiveValue = (arr) => ( arr.reduce((m,c) => c > m && c%2 ==0 ? c : m,0) )

const sumArray = arr => arr.reduce((acc,current) => acc + current ,0)

const diference = (arr) => {
  return Math.max(...arr) - maxPositiveValue(arr)/2
} 

function chocolate(arr1,arr2,sum,dif) {
  if(sum(arr1) % 2 !=0 ||
     sum(arr2) % 2 !=0) return { error: true , message: 'Cannot find the number' }


  const decided = sum(arr1) > sum(arr2) 

  const minusSearch =  decided ? dif(arr1) : dif(arr2) 

  const index = !decided ? arr1.indexOf(minusSearch) : arr2.indexOf(minusSearch) 

  if(index == -1) return {error: true, message: 'Cannot find a number'}

  let pop

  if(decided) {
    pop = arr2.splice(index,1)
    arr1.push(pop[0])
    pop = arr1.splice(arr1.indexOf(Math.max(...arr1)),1)

    arr2.push(pop[0])

  } else {

    pop = arr1.splice(index,1)
    arr2.push(pop[0])
    pop = arr2.splice(arr1.indexOf(Math.max(...arr1)),1)

    arr1.push(pop[0])
  }

  return { error: false , message: 'Change value' }
}

const { error, message } = chocolate(Alice, Bob, sumArray,diference)

!error ? console.log(Alice,Bob) : console.log(message)
