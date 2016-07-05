//Define a function called calculator that receives an operation and 
//two numbers and returns the result of the operation applied to the 
//values passed as parameters

function calculator(operation, a, b){
	var result = "";

	switch (operation){
		case 'suma':
			result = a + b;
			break;
		case 'resta':
			result = a - b;
			break;
		case 'multiplicacion':
			result = a * b;
			break;
		case 'division':
			result = a / b;
			break;
		default:
			result = "La operación no es correcta"

	}
	return result;
}