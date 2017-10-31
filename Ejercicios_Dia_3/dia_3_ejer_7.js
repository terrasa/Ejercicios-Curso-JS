//_Dia 3 Ejer 7_contar veces que aparece una letra dentro de una frase
//__OK__ver .push

function searchEnd(fin, letter){
	if(fin == textString.length){
		console.log('Busqueda terminada.');
		if(indexLetter.length >0){
			console.log('La letra "'+letter+'" se repite '+ indexLetter.length + ' veces.');
		}
		else{
			console.log('El texto no tiene la letra: "'+letter + '"');
		}
	}
}

function searchLetter(text, letter){
	contadorText=0;
	contador=0;
	textString = text;
	indexLetter = [];
	
	while (contadorText < textString.length){
		indexOk = textString.indexOf(letter, contadorText);
		console.log(indexOk);
		if(indexOk === -1 && indexLetter.length >0){
			contadorText=textString.length;
		}
		else if(indexOk === -1 ){
			contadorText=textString.length;
		}
		else{
			//indexLetter.push =(indexOk);
			indexLetter[contador]  =(indexOk);
			contadorText = indexOk + 1;
			contador++
		}
		searchEnd(contadorText, letter);
	}
	console.log(indexLetter);
}
searchLetter("Hello world, welcome", "o");