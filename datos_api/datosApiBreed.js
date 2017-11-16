//___https://dog.ceo/dog-api/_____

//__  /api/breeds/list/all  Listado de razas y subrazas

/*async function inserData(url){
	let breed = document.getElementsByClassName("breed");
    let datos = await fetch(url);
    let datosJson = await datos.json(); // text.message
		
	for (let prop in datosJson.message) {
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		//console.log(`datosJson.message.${prop} = ${datosJson.message[prop]}`);
		breedP.addEventListener("click", function(){
	 console.log('textCookies');
		});
		breedP.innerHTML = `${prop}`; // Comillas invertidas ``
		
		
	}
	//console.log('Propiedades: cada Raza: ', Object.keys(mensaje) );
	//console.log('Propiedades: Raza index 5: ', Object.keys(mensaje)[5] );
}*/
 
 //  inserData('https://dog.ceo/api/breeds/list/all');

/*async function llamaYPinta(url){
    const primera = await fetch(url);
    const text = await primera.json();
	const mensaje = text.message;
	console.log('text.message: ', text.message);
	console.log('text.message.bulldog; ', text.message.bulldog); //Array con 2 elementos
	console.log('text.message.bulldog[1]: ', text.message.bulldog[1]);
	console.log('text.status: ', text.status);
	console.log('text: ', text);
	
	mensaje.bulldog.forEach(function(element){
		console.log('forEach text.message.bulldog: ', element);	
	})
	mensaje.bulldog.forEach(function(element, index){
		console.log('forEach text.message.bulldog Index: ' , index);		
	})
	console.log('Propiedades: cada Raza: ', Object.keys(mensaje) );
	console.log('Propiedades: Raza index 5: ', Object.keys(mensaje)[5] );
 }
 
 llamaYPinta('https://dog.ceo/api/breeds/list/all');*/

/*async function inserData(url, breed_div, objeto){
	let breed = document.getElementsByClassName(breed_div);
    let data = await fetch(url);
    let dataJson = await data.json();
	let result = dataJson.message;
	console.lo(url);
	console.log(breed_div);
	console.log(objeto);
	
	console.log('Propiedades: cada Raza: ', Object.keys(result) );
	console.log('Propiedades: Raza index 5: ', Object.keys(result)[5] );
	
	for(let prop = 0; prop < objeto.length; prop++){//Object.keys
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		if(breed_div == 'breed'){
			breedP.innerHTML = Object.keys(result)[prop]; // Comillas invertidas ``
			breedP.addEventListener("click", function(){
				inserData('https://dog.ceo/api/breeds/list/all', 'subBreed', result.this);// prop no se si será válida
			} );
		}
		if(breed_div != 'breed'){
			breedP.innerHTML = pos.innerHTML;
			console.log( 'PARAAAAAAAA  ' );
			break;	
		}
	}
}

 inserData('https://dog.ceo/api/breeds/list/all', 'breed', Object.keys(result));*/

async function dataElement(url, breed_div, pos){
	console.log('indexIndex pasado: ', pos);
	let breed = document.getElementsByClassName(breed_div);
    let data = await fetch(url);
    let dataJson = await data.json();
	let result = dataJson.message;
	console.log('index pasado: ', pos);
	/*Object.keys(result).forEach(function(prop, index){
		if (pos == prop){
			let resulta = Object.keys(result)[index];
			console.log('resulta: ', resulta);
		}
	})*/
	let resulta = Object.keys(result)[pos];
			console.log('resulta: ', resulta);
	//console.log(`result.pos: `, dataJson.message.Object.keys(result)[pos]);
	
	
	for(let prop = 0; prop < pos.length; prop++){
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = result.pos[prop]; // Comillas invertidas ``
		//breedP.addEventListener("click", dataElement);
	}
}


async function dataProp(url, breed_div){
	let breed = document.getElementsByClassName(breed_div);
    let data = await fetch(url);
    let dataJson = await data.json();
	let result = dataJson.message;
	
	Object.keys(result).forEach(function(prop, index){
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = prop; // Comillas invertidas ``
		breedP.addEventListener("click", function(){
			console.log('this.inner: ', this.innerHTML);
			console.log('this_prop: ', prop);
			console.log(index);
			let indexIndex = Object.keys(result).prop;
			console.log('indexIndex: ', index);
			dataElement('https://dog.ceo/api/breeds/list/all', 'subBreed', indexIndex)
		});
	})
	
	/*for(let prop = 0; prop < Object.keys(result).length; prop++){
		console.log(Object.keys(result));
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = Object.keys(result)[prop]; // Comillas invertidas ``
		breedP.addEventListener("click", function(){
			console.log('this.inner: ', this.innerHTML);
			dataElement('https://dog.ceo/api/breeds/list/all', 'subBreed', this)
		});
	}*/
}

dataProp('https://dog.ceo/api/breeds/list/all', 'breed');