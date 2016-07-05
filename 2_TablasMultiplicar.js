// Tablas de multiplicar del 1 al 10.
// Write a function that writes in the console the multiplication table (from 1 to 10)

function tablasMultiplicar1to10(){
	var result = "";
	
	for (var i = 1; i <= 10; i++){
		for (var y = 1; y <= 10; y++){
			result += i * y + " ";
		}
		result += "\n";
		
	}
	return result;
}	