// Tabla multiplicar de un número dado
// Write a function that writes in the console the multiplication 

function tablaMultiplicar(numerotabla){
	var result = "";
	
	for (var i = 0; i <= 10; i++){
		result += i + " x " + numerotabla + " = " + i*numerotabla + "/n";
	}
	return result;
}	