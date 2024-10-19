class movie{
    constructor(title, director, year){
        this.title = title;
        this.director = director;
        this.year = year;
    }
}

addMovieToList = (movie)=> {
const list = document.getElementById('dat');
const row = document.createElement('tr');
row.innerHTML = "<td>" + movie.title + "</td> <td>" + movie.director + "</td> <td>" + movie.year + "</td>"
list.appendChild(row)

}

document.querySelector('#for').addEventListener("submit", addAMovie )

function addAMovie(e){
    e.preventDefault()
    const title = document.querySelector("#movT").value
    const director = document.querySelector("#dir").value
    const year = document.querySelector("#yr").value
    const Movie = new movie(title,director,year)
    addMovieToList(Movie)
    document.querySelector("#movT").value = ""
    document.querySelector("#dir").value = ""
    document.querySelector("#yr").value = ""
}