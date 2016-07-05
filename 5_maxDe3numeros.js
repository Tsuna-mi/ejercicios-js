// Define a function maxOfThree() that takes three numbers 
// as arguments and returns the largest of them.

function max (a,b,c){
	if(a > b && a > c){
		console.log("el máximo es " + a);
	}else if(b > a && b > c){
		console.log("el máximo es " + b);
	}else{
		console.log("el máximo es " + c);
	}
}