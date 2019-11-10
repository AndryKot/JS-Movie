(function () {
    function MovieList() {
        this.URL = 'http://localhost:3000/films';
        this.filterURL = 'http://localhost:3000/films/getByOptions';
    }

    MovieList.prototype = {
        search: function (searchValue, data) {
            var movies = data;

            movies = movies.filter(movie => {
                if (movie.Title.toUpperCase().indexOf(searchValue) > -1) {
                    return movie;
                }
            });

            return movies;
        },
        edit: function (id, newData) {
            var data = {
                id: id,
                options: newData
            }

            var xhr = new XMLHttpRequest();
            xhr.open('PUT', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        },
        add: function (data) {
            var xhr = new XMLHttpRequest();
            var data = {
                movie: data
            };

            xhr.open('POST', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        },
        getById: function (id) {
            return window.movieListData.find(item => item.ID === id);
        },
        deleteById: function (id) {
            var message = confirm('Remove movie ' + id + ' from the list?');
            if (message) {
                var xhr = new XMLHttpRequest();
                var data = {
                    id: id
                };
                
                xhr.open('DELETE', this.URL);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        },
        getAll: function (onSuccess) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send();

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
        },
        filter: function (data, onSuccess) {
            var xhr = new XMLHttpRequest();
            var data = {
                options: {
                    Genred: data
                }
            };

            xhr.open('POST', this.filterURL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response));
            });
        },
        sort: function (rule, order) {
            var data = window.movieListData;

            if (rule.toLowerCase() !== "title") {
                data.sort((a, b) => a[rule] - b[rule]);
            } else {
                data.sort((a, b) => a[rule] < b[rule] ? -1 : 1);
            }

            if (order) {
                data.reverse();
            }

            window.movieListData = data;
        }
    }

    window.movieList = new MovieList(); // "export"
})();
