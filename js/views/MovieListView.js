(function () {
    function MovieListView() {
    }

    MovieListView.prototype.clear = function (container) {
        while (container.firstChild) container.removeChild(container.firstChild);
    };

    MovieListView.prototype.render = function (data, container) {
        this.movies = data.map(function (el) {
            return new Movie(el);
        });

        var container = container || document.querySelector('.main-content');
        this.clear(container);

        this.moviesContainer = document.createElement('div');
        this.moviesContainer.setAttribute('class', 'container');
        this.counter = document.querySelector('.movielist-info__row');

        while (this.counter.firstChild) this.counter.removeChild(this.counter.firstChild);
        if (this.movies.length > 1) {
            this.counter.insertAdjacentHTML('beforeend', `Showing <span class="movielist-info__value">${this.movies.length} items</span>`);
        } else {
            this.counter.insertAdjacentHTML('beforeend', `Showing <span class="movielist-info__value">1 item</span>`);
        }

        this.movies.forEach(movie => {
            var movie = new window.MovieTileView(movie);
            this.moviesContainer.append(movie.getElement());
        });

        container.append(this.moviesContainer);

        addEventListener('click', function (e) {
            if (e.target.closest('.add-button')) {
                var newMovieModal = new window.MovieEditView();
                newMovieModal.renderModal();
            }

            if (!e.target.closest('.movie-section')) return;

            var id = e.target.closest('.movie-section').dataset.modalToggle;
            var movieDetails = new window.MovieView(id);

            movieDetails.renderModal();
        });
    };

    window.MovieListView = MovieListView;
})();
