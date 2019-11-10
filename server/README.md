# Server.js 
*url: http://localhost:3000

# Methods get:
## GetAllFilms: http://localhost:3000/films - return all information about films

# Methods post:
## AddFilm: 
		URL: http://localhost:3000/films/
		body: 	
			{
				"movie": {
					"ID": "55874",
					"Title": "ІЗОЛЯЦІЯ",
					"RunTime": 90,
					"OpeningDate": "2019-08-22T00:00:00",
					"TitleAlt": "Abgeschnitten ",
					"GenreId": "0000000008",
					"Actors": [
						"Вася"
					],
					"Genred": "Триллер",
					"RatingCount": 0,
					"srcImage": ""
				}
			}
## GetByOptions: 
		 URL: http://localhost:3000/films/getByOptions
		 body: {"options":{"Genred":"" or [], "OpeningDate":"" or []}}

		 Example: 
			Request body: {"options":{"Genred":["Триллер", "Драма"], "OpeningDate": "2019-09-26T00:00:00"}}
			Response body:     
			[
				{
					"ID": "HO00000245",
					"Title": "РОЗПЛАТА",
					"RunTime": 105,
					"OpeningDate": "2019-08-29T00:00:00",
					"TitleAlt": "A Score to Settle",
					"GenreId": "0000000008",
					"Actors": [],
					"Genred": "Триллер",  <-------------------- Genred
					"RatingCount": 0,
					"srcImage": ""
				},
				{
					"ID": "HO00000248",
					"Title": "СИНЯ БЕЗОДНЯ 2",
					"RunTime": 90,
					"OpeningDate": "2019-08-29T00:00:00",
					"TitleAlt": "47 Meters Down: Uncaged ",
					"GenreId": "0000000004",
					"Actors": [],
					"Genred": "Драма",	<-------------------- Genred
					"RatingCount": 0,
					"srcImage": ""
				},
				{
					"ID": "HO00000269",
					"Title": "МАНХЕТТЕНСЬКИЙ ФЕСТИВАЛЬ КОРОТКОМЕТРАЖНИХ ФІЛЬМІВ ",
					"RunTime": 150,
					"OpeningDate": "2019-09-26T00:00:00",  <-------------------- OpeningDate
					"TitleAlt": "",
					"GenreId": "0000000035",
					"Actors": [],
					"Genred": "Фестиваль",
					"RatingCount": 0,
					"srcImage": ""
				}
			]
			
# Methods put:
## EditFilm:
		 URL: http://localhost:3000/films/
		 body: {"id":"", options:{}}

# Methods delete:
## DeleteFilm:
		 URL: http://localhost:3000/films/
		 body: {"id"}


# Models and methods 
	*1) Movie: 
		*Methods: -
		
	*2) MovieList 
		*Methods:	
			setMovieList(movies)
			addMovie(movie/movieArray)
			findMovie(index)
			edit(index, otions)
			deleteMovie(index)
			getByOptions(options)
