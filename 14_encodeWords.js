//Define a function called ​encodeWord​ that receives a string and return 
//the codified version of that string replacing the following characters:

// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

function encodeWord(palabra) {
	var palabracodificada="";
	var caracter;
	for (var i = 0; i < palabra.length; i++){
		caracter = palabra.charAt(i);
		switch ( caracter ){
			case 'T':
				caracter = 7;
				break;
			case 'A':
				caracter = 4;
				break;
			case 'S':
				caracter = 5;
				break;
			case 'O':
				caracter = 0;
				break;

		}
		palabracodificada += caracter;
	}
	return palabracodificada;
}