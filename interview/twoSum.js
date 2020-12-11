// Fuentes : Damian sire Desarrollo youtube
// Me base en su explicaion

const test1Number = 12
const test1Array = [0,3,5,7,8,9,12]

const twoSum = (arr,sum) => {
	let sumPair = []
	let start = 0
	let final = arr.length-1

	while( start < final ){
		if(arr[start] + arr[final] === sum){
			sumPair.push([arr[start],arr[final]])
			start++
			final--
		} else if(arr[start] + arr[final] > sum){
			start++
		} else {
			final--
		}
	}

	return sumPair

}


const resultTest1 = twoSum(test1Array, test1Number)
console.log(resultTest1)
