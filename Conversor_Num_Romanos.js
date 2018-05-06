// Num romanos - Comprobar en https://www.calkoo.com/es/convertir-numeros-romanos

var unidades = ['I','II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
var decenas = ['X','XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var centenas = ['C','CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];

var num = prompt('dame un num del 1 al 200', '.....esperando');
if(num!="" || num!='.....esperando' ){
	var num_array = num.split('');
}
console.log('El numero: '+ num + ' expresado en nº romanos es: ' );
	
if (num_array.length >2){
	if(num_array[1] !=0 && num_array[2] !=0){
		console.log(centenas[num_array[0]-1]+ ' ' + decenas[num_array[1]-1]+ ' ' + unidades[num_array[2]-1] );
	}
	else if(num_array[2] == 0 && num_array[1] == 0){
		console.log(centenas[num_array[0]-1]);
	}
	else if(num_array[2] == 0){
		console.log(centenas[num_array[0]-1]+ ' ' + decenas[num_array[1]-1] );
	}
	else{
	console.log(centenas[num_array[0]-1]+ ' ' + unidades[num_array[2]-1] );
	}
}
else if(num_array.length > 1 ){
	if(num_array[1] !=0){
		console.log(decenas[num_array[0]-1]+ ' ' + unidades[num_array[1]-1] );
	}
	else{
		console.log(decenas[num_array[0]-1] );
	}
}
else{
	console.log(unidades[num_array[0]-1] );
}