const data = null;
const lista=document.getElementById('lista');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		let dataJSON=(JSON.parse(this.responseText));

		for(let data of dataJSON){
			/*
			console.log(`Titulo: ${data.title}`);
			console.log(`Plataforma: ${data.platform}`)
			console.log(`Fecha de lanzamiento: ${data.release_date}`)
			console.log(`URL: ${data.game_url}`)
			*/

			let elemento=document.createElement('li')

			lista.appendChild(elemento).innerHTML=`<h3>Title ${data.title}</h3> <br>`
			lista.appendChild(elemento).innerHTML+=`Platform: ${data.platform} <br>`
			lista.appendChild(elemento).innerHTML+=`Release Date: ${data.release_date} <br>`
			lista.appendChild(elemento).innerHTML+=`Download: ${data.game_url} <hr>`
		}
	}
});

xhr.open("GET", "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&category=shooter");
xhr.setRequestHeader("x-rapidapi-host", "free-to-play-games-database.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "a16181cfe6msh0eb45295384daffp11b51ajsnfbe6af3e090b");

xhr.send(data);