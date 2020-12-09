test1 = 'Hola mundo'
test2 = 'Contando estas palabras'

const counterWords = (word,print) => {
	let counter = {}
	transformWord = word.replace(/ /g,"").toLowerCase()
	for(let letter of transformWord){
		if(counter[letter])
			counter[letter] += 1
		else 
			counter[letter] = 1
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


