(function () {
    function MovieEditView(movie) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'movie-edit');

        var movieProps = movie ? Object.entries(movie) : ['ID', 'Title', 'TitleAlt', 'actorsList', 'producerName', 'country', 'Genred', 'Image', 'synopsis', 'Rating', 'OpeningDate', 'trailerUrl'];

        var rowsHtml = '';
        this.title = movie ? 'Edit Movie' : 'New Movie';
        this.id = movie ? movie.ID : 'new';

        this.modal = new window.ModalView(this.render(), this.title);

        movieProps.forEach(element => {
            // if (element[0] === 'ID' || element[0] === 'views') return;

            var placeholder = Array.isArray(element) ? 'Enter ' + element[0] : 'Enter ' + element;
            var key = Array.isArray(element) ? element[0] : element;
            var value = Array.isArray(element) ? element[1] : '';

            var row = `
                <div class="form-group edit-form-row">
                    <label for="${key}" class="form-row-label">${key}</label>
                    <input id="${key}" name="${key}" class="form-control"" type="text" placeholder="${placeholder}" value="${value}" />
                </div>
            `;
            if (element[0] === 'synopsis' || element === 'synopsis') {
                row = `
                    <div class="form-group edit-form-row">
                        <label for="${key}" class="form-row-label">${key}</label>
                        <textarea rows="4" id="${key}" name="${key}" class="form-control" placeholder="${placeholder}">${value}</textarea>
                    </div>
                `;
            }
            rowsHtml += row;
        });

        if (movie) {
            rowsHtml += `
                <div class="form-group edit-form-row text-center">
                    <button id="delete-movie" class="btn btn-lg btn-danger" type="button">Delete</button>
                </div>
            `;
        }

        let formHtml = `
            <form action="" method="" id="edit-form" class="edit-form">
                ${rowsHtml}
                <div class="edit-form-footer form-group edit-form-row text-center py-4">
                    <button id="movie-edit-submit" class="btn btn-lg btn-primary px-4" type="submit">Submit</button>
                    <button id="movie-edit-cancel" data-popup-close class="btn btn-lg btn-secondary ml-4 px-4" type="button">Cancel</button>
                </div>
            </form>
        `;

        this.element.insertAdjacentHTML('beforeend', formHtml);
    }

    MovieEditView.prototype.controls = function () {
        let submitBtn = document.querySelector('#movie-edit-submit');
        let cancelBtn = document.querySelector('#movie-edit-cancel');
        let form = this.element.querySelector('#edit-form');

        const formToJSON = elements => [].reduce.call(elements, (data, element) => {
            data[element.name] = element.value;
            return data;
        }, {});

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();

            let formData = formToJSON(form.elements);

            if (this.id === 'new') {
                window.movieList.add(formData);
            } else {
                let id = this.id;
                window.movieList.edit(id, formData);
            }

            window.movieList.getAll(function(data) {
                window.movieListData = data;
                window.movieListFiltered = data;
                movieListView.render(data, document.querySelector('.container'));
                filters.render();
            });

            this.modal.hideModal(e, '-force');
        });

        cancelBtn.addEventListener('click', (e) => {
            this.modal.hideModal(e, '-force');
        });

        if (this.id !== 'new') {
            let deleteBtn = document.querySelector('#delete-movie');
            deleteBtn.addEventListener('click', (e) => {
                let id = this.id;
    
                window.movieList.deleteById(id);
    
                window.movieList.getAll(function(data) {
                    window.movieListData = data;
                    window.movieListFiltered = data;
                    movieListView.render(data, document.querySelector('.container'));
                    filters.render();
                });
    
                this.modal.hideModal(e, '-force');
            });
        }
    }

    MovieEditView.prototype.render = function () {
        return this.element;
    }

    MovieEditView.prototype.renderModal = function () {
        this.modal.showModal();
        this.controls();
    }

    window.MovieEditView = MovieEditView;
})()