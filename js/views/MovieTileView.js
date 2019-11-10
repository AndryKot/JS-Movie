(function () {
    function MovieTileView(movie) {
        this.movie_section = document.createElement('div');
        this.movie_section.className = ('movie-section');
        this.movie_section.setAttribute( "data-modal-toggle", movie.ID);
        var card = `<div class="movie-section__poster">
						<img class="title_image" src="${movie.Image}" alt=${movie.Title}>
					    </div>
				<div class="movie-section__info">
					<div class="wrapper">
						<div class="flex">
							<h3 class="title result">${movie.Title}</h3>
							<span>${movie.OpeningDate}</span>
						</div>
					</div>
				<p class="overview">${movie.synopsis.slice(0, ((movie.synopsis.slice(0, 250)).lastIndexOf(' '))) + " ..."}</p>
					<p class="view_more">More Info</p>
				</div>`;

        this.movie_section.insertAdjacentHTML("beforeend", card);
    }

    MovieTileView.prototype.getElement = function () {
        return this.movie_section;
    }

    window.MovieTileView = MovieTileView; // "export"
})()