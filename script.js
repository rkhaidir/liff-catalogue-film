document.addEventListener("DOMContentLoaded", function() {
	const url = "https://api.themoviedb.org/3/movie/now_playing?api_key="
	const apiKey = "f72b402d472b857c586e6e439a0cfada"
	const urlPoster = "https://image.tmdb.org/t/p/original/"
	let listFilm = document.querySelector(".film")

	function tampilFilm() {
		let xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if(this.readyState === 4 && this.status === 200) {
				let film = JSON.parse(this.responseText)
				for(let i=0; i<film.results.length; i++) {
					let div = document.createElement("DIV")
					let html = `
					<div class="col-6 col-md-4 col-sm-6 mt-3">
						<div class="card" style="width: 20rem;">
						  <img src="${urlPoster}${film.results[i].poster_path}" class="card-img-top" alt="...">
						  <div class="card-body">
						    <h5 class="card-title">${film.results[i].title}</h5>
						    <p class="card-text">${film.results[i].release_date}</p>
						    <input type="hidden" value="${film.results[i].id}">
						    <button href="#" class="btn btn-primary">Kirim Detail Film</button>
						  </div>
						</div>
					</div>`
					div.innerHTML = html
					listFilm.appendChild(div)
				}
			}
		}
		xhttp.open("GET", url+apiKey, true)
		xhttp.send()
	}

	tampilFilm()
})