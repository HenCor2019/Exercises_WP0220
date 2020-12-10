const test1 = '1 + (4*6) + {(8*9-7)}'
const test2 = '((6*9))-10/3)'

//Dejando solo las agrupaciones
function cleanWord(word){
  const PAIRS = '()[]{}'
  const newWord = word.split('').filter(letter => PAIRS.includes(letter))
				
  return newWord.join('')
}

let cleanedWord = cleanWord(test1)

// funcion verificadora
function verifyBrackets(word){
  const pairsArray = ['()','[]','{}']
  if(!word)
    return true

  const index = pairsArray.reduce((index,pair) => index === -1 ? word.indexOf(pair) : index  ,-1)

  if( index === -1 )
    return false
  else {
    const cutWord = word.substr(0,index) + word.substr(index+2,)

    return verifyBrackets(cutWord)

  }
}

let response = verifyBrackets(cleanedWord)
response ? console.log('Valido') : console.log('Invalido')


console.log('-----------------------------')

cleanedWord = cleanWord(test2)
response = verifyBrackets(cleanedWord)
response ? console.log('Valido') : console.log('Invalido')
