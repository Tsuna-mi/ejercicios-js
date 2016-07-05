// Colección de números dado 2.

function getRange(x1,x2){
	var result = "";
	if(x2 < x1){
		return -1;
	}
	for (var i = x1; i <= x2; i++){
		result += i + " ";
	}
	return result;
}	