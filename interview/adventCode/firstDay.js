// Calcular en un array dos numeros que sumen 2020

function calculateSum(arr,year){
  let pairs = []
  let sumPair = []
  // [10,20,1020,2000,2010,2015]

  let start = 0
  let final = arr.length - 1

  while( start < final ){
    if(arr[start] + arr[final] === year){
      pairs.push([arr[start],arr[final]])
      sumPair.push(arr[start]*arr[final])
      start++
      final--
    } else if(arr[start] + arr[final] > year) 
        final--
      else 
        start++
  }
  console.log(`parejas que suman ${year}:`,pairs)
  console.log(`Multiplicacion de cada pareja: `,sumPair)
}

const test1 =[10,20,1020,2000,2010,2015]
const year = 2020

calculateSum(test1,year)

 
