//Define a function called calculator that receives an operation and 
//several numbers (can be 2 or 10 or whatever) returns the result of 
//the operation applied to the values passed as parameters

function calculator(){
	var result = arguments[1];
	
	switch (arguments[0]){
		case 'suma':
			for (var i = 2; i < arguments.length;i++){				
				result += arguments[i];
			}
			
			break;
		case 'resta':
			for (var i = 2; i < arguments.length;i++){
				result -= arguments[i];
			}
			
			break;
		case 'multiplicacion':
			for (var i = 2; i < arguments.length;i++){
				result *= arguments[i];
			}
			
			break;
		case 'division':
			for (var i = 2; i < arguments.length;i++){
				result /= arguments[i];
			}
			
			break;
		default:
			result = "La operación no es correcta"

	}
	return result;
}

