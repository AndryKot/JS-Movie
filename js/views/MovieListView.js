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
            if (e.target.closest('.nav-menu__Rate')) {
                var movieListView = new window.MovieListView();
                window.movieList.getAll(function(data) {
                    window.movieListData = data;
                    movieListView.sortbyTitle(data, document.querySelector('.container'));

                });
            }
            if (e.target.closest('.nav-menu__Name')) {
                var movieListView = new window.MovieListView();
                window.movieList.getAll(function(data) {
                    window.movieListData = data;
                    movieListView.sortbyName(data, document.querySelector('.container'));

                });
            }
            if (e.target.closest('.nav-menu__Date')) {
                var movieListView = new window.MovieListView();
                window.movieList.getAll(function(data) {
                    window.movieListData = data;
                    movieListView.sortbyDate(data, document.querySelector('.container'));

                });
            }
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
    MovieListView.prototype.sortbyTitle = function(data, container) {
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
        this.movies.sort((a,b)=> a.Rating < b.Rating ? 1 : -1);
        this.movies.forEach(movie => {
            var movie = new window.MovieTileView(movie);
            this.moviesContainer.append(movie.getElement());
        });

        container.append(this.moviesContainer);
    };
    MovieListView.prototype.sortbyName = function(data, container) {
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
        this.movies.sort((a,b)=> a.Title > b.Title ? 1 : -1);
        this.movies.forEach(movie => {
            var movie = new window.MovieTileView(movie);
            this.moviesContainer.append(movie.getElement());
        });

        container.append(this.moviesContainer);
    };
    MovieListView.prototype.sortbyDate = function(data, container) {
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
        this.movies.sort((a,b)=> a.OpeningDate < b.OpeningDate ? 1 : -1);
        this.movies.forEach(movie => {
            var movie = new window.MovieTileView(movie);
            this.moviesContainer.append(movie.getElement());
        });

        container.append(this.moviesContainer);
    };

    window.MovieListView = MovieListView;
})();
