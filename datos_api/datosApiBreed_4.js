//___https://dog.ceo/dog-api/_____

//__  /api/breeds/list/all  Listado de razas y subrazas

async function dataImg(url, breedImage){
    let data = await fetch(url);
    let dataJson = await data.json();
	let result = dataJson.message;
    console.log('result: ', result);
    
	/*let breed = document.getElementsByClassName(breed_div);
    let breedP = document.createElement('img');
	breed[0].appendChild(breedP);*/
	breedImage.src = result; 		
	}

async function dataElement(breed_div, pos, prop){
    /*if(result[raza].length == 0){
        
    }*/
	let breed = document.getElementsByClassName(breed_div);
	console.log('array subraza pasado: ', pos);
    console.log("raza pasada: ", prop);
		
	for(let element = 0; element < pos.length; element++){
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = pos[element]; // Comillas invertidas ``
		console.log('subraza: ', pos[element]);
		breedP.addEventListener("click", function(){
            let breedImage = document.getElementById('imageDog');
			dataImg(`https://dog.ceo/api/breed/${prop}/${pos[element]}/images/random`, breedImage)
		});
	}
}


async function dataProp(url, breed_div){
	let breed = document.getElementsByClassName(breed_div);
    let data = await fetch(url);
    let dataJson = await data.json();
	let result = dataJson.message;
    
	// con for in Funciona tb
	/*for(let prop in result){
		let breedP = document.createElement('p');
		breed[0].appendChild(breedP);
		breedP.innerHTML = prop; // Comillas invertidas ``
		breedP.addEventListener("click", function(){
			dataElement('subBreed', result[prop], prop)
		});
	}*/
    
       const razas = Object.keys(result);
       // tengo un array de razas
       razas.forEach(function(raza,index){
           let breedP = document.createElement('p');
           breed[0].appendChild(breedP);
           breedP.innerHTML = raza;
           breedP.addEventListener("click", function(){
               console.log(raza," . ",result[raza])
			dataElement('subBreed', result[raza], raza)
		});
       })
}

dataProp('https://dog.ceo/api/breeds/list/all', 'breed');