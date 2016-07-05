//Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its 
//RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with
//this code

function getRGB( colorHEX ){
	var red = parseInt(Number(colorHEX.slice(1,3)),10);
	var green = parseInt(Number(colorHEX.slice(3,5)),10);
	var blue = parseInt(Number(colorHEX.slice(5,7)),10);

	var colorRGB = "rgb(" + red + "," + green + "," + blue + ")"; 
	return colorRGB;	
}

// Es mejor subdividir el código para ser más claro y que se lea más fácilmente.
// Crear cuantas variables se necesite.