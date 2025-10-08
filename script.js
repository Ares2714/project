"use strict";
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm(){
    for(let i = 0; i < 2; i++){
        const film = prompt('Один из последних просмотренных фильмов?',''),
            rate = prompt('На сколько оцените его?','');
        if( film != '' && rate != '' && film.length < 50 && film != null && rate != null){
            personalMovieDB.movies[film] = rate;
            console.log('done')
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilm();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i =1; i < 4; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();