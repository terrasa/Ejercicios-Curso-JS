//_Dia 3 Ejer 6_Suma de los siguientes 50 numeros, por un lado los pares y por otro los impares.

// OK Pero variables addPair y addOdd definidas sin var ni let

function isPair(number){
	if(number % 2 == 0){
		addPair = addPair + number; //addPair+ = number; error
		return addPair  //se necesita???
   	}
	else{
		addOdd = addOdd + number;
   		return addOdd	
	}
}
function addNum (number, rep){
	addPair = 0;
	addOdd = 0;
	console.log('Empezando en el num: '+number+ ' la suma de los '+ rep+' siguientes pares e impares es: ');
	let limit = number + (rep*2);
	for(number; number<=limit; number++){
		console.log('numeros: '+number);
		isPair(number);
	}
	console.log('Suma total de los números pares: '+addPair);
	console.log('Suma total de los números impares: '+addOdd);
}

//_Dia 3 Ejer 6_Suma de los siguientes 50 numeros, por un lado los pares y por otro los impares.

//______OK variables definidas con let al principio no dentro de la función para que existan tambien en la función que las recibe isPair

let addPair;
let addOdd;

function isPair(number){
	if(number % 2 == 0){
		addPair = addPair + number; //addPair+ = number; error
		return addPair  //se necesita???
   	}
	else{
		addOdd = addOdd + number;
   		return addOdd	
	}
}
function addNum (number, rep){
	addPair = 0; // Si definimos aqui con var o let, no existen en isPair()
	addOdd = 0;
	console.log('Empezando en el num: '+number+ ' la suma de los '+ rep+' siguientes pares e impares es: ');
	let limit = number + (rep*2);
	for(number; number<=limit; number++){
		console.log('numeros: '+number);
		isPair(number);
	}
	console.log('Suma total de los números pares: '+addPair);
	console.log('Suma total de los números impares: '+addOdd);
}

//_Dia 3 Ejer 6_Suma de los siguientes 50 numeros, por un lado los pares y por otro los impares.

//______OK variables definidas con let al principio no dentro de la función para que existan tambien en la función que las recibe isPair
// ________Empleando función callback  y  PROMPT

let addPair;
let addOdd;

let numero = parseInt( prompt('Dame un número: ', '...esperando'));
let repeticiones = parseInt( prompt('Cuantos pares o impares quieres? ', '...esperando'));

function isPair(number){
	if(number % 2 == 0){
		addPair = addPair + number; //addPair+ = number; error
		return addPair  //se necesita???
   	}
	else{
		addOdd = addOdd + number;
   		return addOdd	
	}
}
function addNum (number, rep, callback){
	addPair = 0; // Si definimos aqui con var o let, no existen en isPair()
	addOdd = 0;
	console.log('Empezando en el num: '+number+ ' la suma de los '+ rep+' siguientes pares e impares es: ');
	let limit = number + (rep*2);
	for(number; number<=limit; number++){
		console.log('numeros: '+number);
		callback(number);
	}
	console.log('Suma total de los números pares: '+addPair);
	console.log('Suma total de los números impares: '+addOdd);
}

addNum(numero, repeticiones, isPair);

//_Dia 3 Ejer 6_Suma de los siguientes 50 numeros, por un lado los pares y por otro los impares.

//______OK variables definidas con let al principio no dentro de la función para que existan tambien en la función que las recibe isPair
// ________Empleando función callback  y  PROMPT
// En la llamada a la función introducimos los datos dado por el usuario

let addPair;
let addOdd;

/*let numero = parseInt( prompt('Dame un número: ', '...esperando'));
let repeticiones = parseInt( prompt('Cuantos pares o impares quieres? ', '...esperando'));*/

function isPair(number){
	if(number % 2 == 0){
		addPair = addPair + number; //addPair+ = number; error
		return addPair  //se necesita???
   	}
	else{
		addOdd = addOdd + number;
   		return addOdd	
	}
}
function addNum (number, rep, callback){
	addPair = 0; // Si definimos aqui con var o let, no existen en isPair()
	addOdd = 0;
	console.log('Empezando en el num: '+number+ ' la suma de los '+ rep+' siguientes pares e impares es: ');
	let limit = number + (rep*2);
	for(number; number<=limit; number++){
		console.log('numeros: '+number);
		callback(number);
	}
	console.log('Suma total de los números pares: '+addPair);
	console.log('Suma total de los números impares: '+addOdd);
}

addNum(parseInt( prompt('Dame un número: ', '...esperando')), parseInt( prompt('Cuantos pares o impares quieres? ', '...esperando')), isPair);

//_Dia 3 Ejer 6_Suma de los siguientes 50 numeros, por un lado los pares y por otro los impares.

//______OK variables definidas con let al principio no dentro de la función para que existan tambien en la función que las recibe isPair

// ________Empleando función callback  y  PROMPT

// Los datos dados por el usuario e pasan a la siguiente función. 

let addPair;
let addOdd;

function datos(callback){
	let numero = parseInt( prompt('Dame un número: ', '...esperando'));
	let repeticiones = parseInt( prompt('Cuantos pares o impares quieres? ', '...esperando'));
	callback(numero, repeticiones,isPair);
}


function isPair(number){
	if(number % 2 == 0){
		addPair = addPair + number; //addPair+ = number; error
		return addPair  //se necesita???
   	}
	else{
		addOdd = addOdd + number;
   		return addOdd	
	}
}
function addNum (number, rep, callback){
	addPair = 0; // Si definimos aqui con var o let, no existen en isPair()
	addOdd = 0;
	console.log('Empezando en el num: '+number+ ' la suma de los '+ rep+' siguientes pares e impares es: ');
	let limit = number + (rep*2);
	for(number; number<=limit; number++){
		console.log('numeros: '+number);
		callback(number);
	}
	console.log('Suma total de los números pares: '+addPair);
	console.log('Suma total de los números impares: '+addOdd);
}

datos(addNum);