(function () {
    function MovieView(id) {
        this.id = id;
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'movie');

        this.movie = movieList.getById(this.id);

        var movieHtml = `
            <div class="row">
                <div class="col-12 col-md-3">
                    <div class="movie__img">
                        <img src="${this.movie.Image}" class="img-thumbnail" alt="${this.movie.Title}">
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="movie__content">
                        <h1 class="movie__title">${this.movie.Title}</h1>
                        <div class="movie__row"><span class="movie__row-title">Director: </span><span class="movie__row-text">${this.movie.producerName}</span></div>
                        <div class="movie__row"><span class="movie__row-title">Stars: </span><span class="movie__row-text">${this.movie.Actors}</span></div>
                        <div class="movie__row"><span class="movie__row-title">Country: </span><span class="movie__row-text">${this.movie.country}</span></div>
                        <div class="movie__row"><span class="movie__row-title">Genre: </span><span class="movie__row-text">${this.movie.Genred}</span></div>
                        <div class="movie__row"><span class="movie__row-title">Rating: </span><span class="movie__row-text">${this.movie.Rating}</span></div>
                        <div class="movie__row"><span class="movie__row-title">Year: </span><span class="movie__row-text">${this.movie.OpeningDate}</span></div>
                        <p class="movie__info mt-4 mb-4">${this.movie.synopsis}</p>
                        <a href="${this.movie.trailerUrl}" target="_blank" role="button" id="play-button" class="btn btn-promo btn-lg pl-4 pr-4 movie__trailer-button"><span>Watch trailer</span></a>
                        <button type="button" id="edit-button" data-popup-close class="btn btn-casual btn-lg pl-4 pr-4 movie__edit-button"><span>Edit</span></a>
                    </div>
                </div>
            </div>
        `;

        this.element.insertAdjacentHTML('beforeend', movieHtml);
    }

    MovieView.prototype.render = function () {
        return this.element;
    }

    MovieView.prototype.renderModal = function () {
        var modal = new window.ModalView(this.render());
        modal.showModal();

        var editBtn = document.querySelector('#edit-button');

        editBtn.addEventListener('click', function (e) {
            e.preventDefault();
            
            var movie = new MovieEditView(this.movie);
            movie.renderModal();
        }.bind(this));
    }

    window.MovieView = MovieView;
})()
