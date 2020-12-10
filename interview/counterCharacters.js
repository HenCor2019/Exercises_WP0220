const test1 = 'Hola mundo'
const test2 = 'Contando estas palabras'

const counterWords = (word,print) => {
	let counter = {}
	const transformWord = word.replace(/ /g,"").toLowerCase()
	for(let letter of transformWord){
		counter[letter] ? counter[letter] += 1 : counter[letter] = 1

	}
	print(counter)

}

const printWords = word => {
for(let letter in word)
	console.log(letter,': ', word[letter])

}

counterWords(test1,printWords)
console.log('----------------')
counterWords(test2,printWords)
console.log('----------------')


// ----------- Second form -------------- //

const test3 = "lalalale lolo lacalacacalena"
const limitTest3Array = test3.replace(/ /g,'').toLowerCase().split('')

let counter = {}

limitTest3Array.map( letter => counter[letter] ? counter[letter]++ : counter[letter] = 1 )

printWords(counter)
