(function () {
    function MovieList() {
        this.URL = 'http://localhost:3000/films';
    }

    MovieList.prototype = {
        edit: function (id, newData) {
            var data = {
                id: id,
                options: newData
            };

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
        }
    };

    window.movieList = new MovieList(); // "export"
})();
