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

async function inserData(url, breed_div,pos){
	let breed = document.getElementsByClassName(breed_div);
    let datos = await fetch(url);
    let datosJson = await datos.json();
		
	for (let prop in datosJson.message) {
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		//console.log(`datosJson.message.${prop} = ${datosJson.message[prop]}`);
		if(breed_div == 'breed'){
			breedP.innerHTML = `${prop}`; // Comillas invertidas ``
			breedP.addEventListener("click", function(this){
				inserData('https://dog.ceo/api/breeds/list/all', 'subBreed', this );
			} );
		}
		else{
			breedP.innerHTML = `${datosJson.message[prop][pos]}`;
		}	
	}
}

 inserData('https://dog.ceo/api/breeds/list/all', 'breed');