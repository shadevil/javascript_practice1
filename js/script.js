let numberOfFilms;
const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let answers = [];
answers[0] = prompt('Сколько фильмов вы уже посмотрели?');
answers[1] = prompt('Один из последних просмотренных фильмов?');
answers[2] = prompt('Насколько оцените его?');
answers[3] = prompt('Один из последних просмотренных фильмов?');
answers[4] = prompt('Насколько оцените его?');
numberOfFilms = answers[0];
personalMovieDB['movies'][answers[1]] = answers[2];
personalMovieDB['movies'][answers[3]] = answers[4];
console.log(personalMovieDB);