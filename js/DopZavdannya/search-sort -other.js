var option1 =
    {
        ID: '1001',
        shortCode: '',
        title: 'Joker',
        rating: 8.1,
        releaseYear: 2019,
        country: ['USA'],
        translation: 'origin',
        duration: 122,
        synopsis: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
        producerName: 'Todd Phillips',
        actorsList: [],
        trailerUrl: 'https://www.youtube.com/embed/t433PEQGErc'
    };
var option2 ={
    ID: '1002',
    shortCode: '',
    title: 'Spider-Man: Far from Home',
    rating: 7.7,
    releaseYear: 2019,
    country: ['USA'],
    translation: 'origin',
    duration: 129,
    synopsis: 'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    producerName: 'Jon Watts',
    actorsList: ['Tom Holland', 'Jake Gyllenhaal', 'Zendaya'],
    trailerUrl: 'https://www.youtube.com/embed/DYYtuKyMtY8'
};
var option4 ={
    ID: '1004',
    shortCode: '',
    title: 'It Chapter Two',
    rating: 7.0,
    releaseYear: 2019,
    country: ['USA'],
    translation: 'origin',
    duration: 169,
    synopsis: '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call',
    producerName: 'Andy Muschietti',
    actorsList: ['James McAvoy', 'Jessica Chastain', 'Bill Hader'],
    trailerUrl: 'https://www.youtube.com/embed/zqUopiAYdRg'
};
var option3 ={
    ID: '1003',
    shortCode: '',
    title: 'The Old Man & the Gun ',
    rating: 7.6,
    releaseYear: 2018,
    country: ['USA'],
    translation: 'origin',
    duration: 93,
    synopsis: 'The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.',
    producerName: 'David Lowery',
    actorsList: ['Robert Redford', 'Sissy Spacek', 'Casey Affleck'],
    trailerUrl: 'https://www.youtube.com/embed/d7rlUe-Thvk'
};
var option5 ={
    ID: '1005',
    shortCode: '',
    title: 'The Lion King',
    rating: 7.1,
    releaseYear: 2019,
    country: ['USA'],
    translation: 'origin',
    duration: 118,
    synopsis: 'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.',
    producerName: 'Jon Favreau',
    actorsList: ['Donald Glover', 'Beyoncé Knowles', 'James Earl Jones'],
    trailerUrl: 'https://www.youtube.com/embed/4CbLXeGSDxg'
};


function Movie(option) {
    this.id = option.id;
    this.title = option.title;
    this.rating = option.rating;
    this.releaseYear = option.releaseYear;
    this.country = option.country;
    this.translation = option.translation;
    this.duration = optios.duration;
    this.synopsis = option.synopsis;
    this.producerName = option.producerName;
    this.actorsList = option.actorsList;
    this.trailerUrl = option.trailerUrl;

}
Movie.prototype ={
    getId: function(){
        return this.id;
    },
    getTitle: function() {
        return this.title;
    },
    getRating: function() {
        return this.rating;
    },
    getReleaseYear: function() {
        return this.releaseYear;
    },
    getCountry: function() {
        return this.country;
    },
    getTranslation: function() {
        return this.translation;
    },
    getDuration: function() {
        return this.duration;
    },
    getSynopsis: function() {
        return this.synopsis;
    },
    getProducerName: function() {
        return this.producerName;
    },
    getActorsList: function() {
        return this.actorsList;
    },
    getTrailerUrl: function () {
        return this.trailerUrl;
    }
};

function MovieList(options) {
    this.options = options;
}
MovieList.prototype = {

    sortByTitle: function() {
        return this.options.sort((a, b) => a.title > b.title ? 1 : -1);
    },
    sortByReleaseYear: function() {
        return this.options.sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1);
    },
    sortByRating: function() {
        return this.options.sort((a, b) => a.rating < b.rating ? 1 : -1);
    },
    deleteMovie: function(index, quantity) {
        return list.splice(index, quantity);
        return this.options.splice(index, quantity);
    },

    addMovie: function(movie) {
        return list.push(movie);
        return this.options.push(movie);
    }
};


var movieList = new MovieList([option1, option2, option3, option4, option5]);


console.log("=====sortByTitle=======");
console.log(movieList.sortByTitle());;
console.log("============");
console.log("#####sortByYear#######");
console.log(movieList.sortByReleaseYear());;
console.log("######SortByRating######");
console.log(movieList.sortByRating());;
