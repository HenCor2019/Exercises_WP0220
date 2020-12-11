// amor
// roma

const sort = (word) => {
  const wordArray = word.toLowerCase().split('')
  return wordArray.sort()
}

const anagram = (word1 , word2 ) => {
  const word1Sorted = sort(word1)
  const word2Sorted = sort(word2)

  return word1Sorted.join('') === word2Sorted.join('')
}

test1First = 'amor'
test1Second = 'roma'
console.log(anagram(test1First,test1Second))

test2First = 'Anastacia'
test2Second = 'aciatsana'
console.log(anagram(test2First,test2Second))

test3First = 'Juan Perez'
test3Second = 'Katya Lopez'
console.log(anagram(test3First,test3Second))
