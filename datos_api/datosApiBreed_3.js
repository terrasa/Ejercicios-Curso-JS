//___https://dog.ceo/dog-api/_____

//__  /api/breeds/list/all  Listado de razas y subrazas


async function dataElement(url, breed_div, pos){
	let breed = document.getElementsByClassName(breed_div);
	console.log('subraza pasado: ', pos);
		
	for(let element = 0; element < pos.length; element++){
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = pos[element]; // Comillas invertidas ``
		console.log('subraza: ', pos[element]);
		breedP.addEventListener("click", function(){
			dataImg('https://dog.ceo/api/breeds/XXXXXXX', 'breedImg', pos[element])
		});
	}
}


async function dataProp(url, breed_div){
	let breed = document.getElementsByClassName(breed_div);
    let data = await fetch(url);
    let dataJson = await data.json();
	let result = dataJson.message;
	
	for(let prop in result){
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = prop; // Comillas invertidas ``
		breedP.addEventListener("click", function(){
			dataElement('https://dog.ceo/api/breeds/list/all', 'subBreed', result[prop])
		});
	}			
}

dataProp('https://dog.ceo/api/breeds/list/all', 'breed');