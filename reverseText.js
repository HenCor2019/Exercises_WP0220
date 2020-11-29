// No destructuracion ni recursion
const reverseText = (text) => {

				let reverse = ""
				for(let letter of text)
								reverse = letter + reverse
				return reverse
}

const test1 = "Hola mundo"
const test2 = "Palabra"
const test3 = "No se revierte"
const test4 = "La papaya esta grande"
const test5 = "Dale vueltaba esto"
const test6 = "Quiero jugar play"

console.log(reverseText(test1), reverseText(test2))


// Usando destructuracion
function reverseText2(text) {
				return [...text].reverse().join("")
} 

console.log(reverseText2(test3), reverseText2(test4))


// Usando recursion
function reverseRecursionText(text){
				if(!text) return ""

				return reverseRecursionText(text.substring(1)) + text.charAt(0) 
}

console.log(reverseRecursionText(test5), reverseRecursionText(test6))
