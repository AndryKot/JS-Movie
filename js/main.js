var movieListView = new window.MovieListView();
window.movieList.getAll(function(data){
    window.movieListData = data;
    movieListView.render(data, document.querySelector('.movielist-container'));
});
