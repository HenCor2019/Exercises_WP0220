
const firstMajorElement = (arr,k,begin,end) => {

	if(begin === arr.length-1) return -1

	const middleIndex = Math.trunc((begin + end)/2)

	if(arr[middleIndex] === k ) return middleIndex

	if(arr[middleIndex] < k) return firstMajorElement(arr,k,middleIndex,end)
	if (arr[middleIndex] > k) return firstMajorElement(arr,k,begin,middleIndex)

}

const binarySearch = (arr,k) => firstMajorElement(arr,k,0,arr.length)

const test1 = [1,2,3,4,5,6,7,9]
index = binarySearch(test1,7)

index !== -1 && test1[index+1] ? console.log('primer mayor: ',test1[index+1]) : console.log('No hay mayores')
