//___https://dog.ceo/dog-api/_____

//__  /api/breeds/list/all  Listado de razas y subrazas


async function dataElement(url, breed_div, pos){
	console.log('indexIndex pasado: ', pos);
	let breed = document.getElementsByClassName(breed_div);
   // let data = await fetch(url);
    //let dataJson = await data.json();
//	let result = dataJson.message;
	console.log('suraza pasado: ', pos);
	
	
	
	
	for(let prop = 0; prop < pos.length; prop++){
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = pos[prop]; // Comillas invertidas ``
		//breedP.addEventListener("click", dataElement);
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
		//	let indexIndex = Object.keys(result).prop;
		//	console.log('indexIndex: ', index);
			dataElement('https://dog.ceo/api/breeds/list/all', 'subBreed', result[prop])
		});
	}
	
			
}

dataProp('https://dog.ceo/api/breeds/list/all', 'breed');