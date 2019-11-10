// let res, listMovie = new MovieList;

// function createCORSRequest(method, url) {
//     var xhr = new XMLHttpRequest();

//     if ("withCredentials" in xhr) {
//       xhr.open(method, url, false);
//     } else if (typeof XDomainRequest != "undefined") {
//       xhr = new XDomainRequest();
//       xhr.open(method, url);
//     } else {
//       xhr = null;
//     }

//     return xhr;
//   }
//   var xhr = createCORSRequest('GET', `http://localhost:3000/films`);

//   xhr.onreadystatechange = function () {
//     if(this.readyState === 4 && this.status === 200){
//       res = this.responseText;
//     }
//   }
  
//   xhr.send();
  
//   listMovie.setMovieList(JSON.parse(res).list)
  
//   console.log(listMovie);

  const URLFILMS = "http://localhost:3000/films";

  var http = new XMLHttpRequest();
  http.open("POST",URLFILMS);
  http.setRequestHeader("Content-Type", "application/json");
  var movie = {
    Title:"Hello world"
  }

  http.send(JSON.stringify({movie}));

  http.addEventListener("load", ()=>{
      console.log(http.response);
  });