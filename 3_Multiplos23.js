//Suma los Múltiplos 23 hasta 500
//Write a program that writes in the console all the multiples of 23 less than 500 
//and at the end writes the sum of all of them

function sumMult23(){
	var result = 0;

	for (var i = 0; i <= 500; i++){
		if (i % 23 === 0){
			result += i;
		}
	}
	return result;	
}