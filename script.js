"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if(personalMovieDB.count < 10){
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
