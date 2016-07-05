//Write a function that takes a character (i.e. a string of length 1) 
//and returns true if it is a vowel, false otherwise.

function isVowel(character){
	if ( character.charAt(0) === "a" || character.charAt(0) === "e" || character.charAt(0) === "" 
	|| character.charAt(0) === "o" || character.charAt(0) === "u"){
		return true;
	}else{
		return false;
	}
}