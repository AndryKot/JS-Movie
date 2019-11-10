(function () {
    function Movie(options) {
        if (options) {
            this.ID = options.ID;
            this.Title = options.Title;
            this.TitleAlt = options.TitleAlt;
            this.actorsList = options.actorsList;
            this.Image = options.Image;
            this.synopsis = options.synopsis;
            this.Rating = options.Rating;
            this.producerName = options.producerName;
            this.country = options.country;
            this.GenreId = options.GenreId;
            this.Genred = options.Genred;
            this.OpeningDate = options.OpeningDate;
            this.trailerUrl = options.trailerUrl;
            this.RunTime = options.RunTime;
            this.translation =options.translation;
        }
    }

    Movie.prototype = {
        add: function (key, value) {
            this[key] = value;
        },
        edit: function (key, value) {
            this[key] = value;
        },
        remove: function (key) {
            delete this[key];
        },
        setScore: function () {
            return 'set score function for ' + this.Title;
        },
        playVideo: function () {
            return 'play function for ' + this.Title;
        }
    }

    window.Movie = Movie;
})()
