/* eslint-disable promise/always-return */
import { writeFileSync } from 'fs';
import { tmdbApiKey } from '@assets/private/apiKeys';

const url = [
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}&language=hu-HU` /* MOVIE GENRES */,
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${tmdbApiKey}&language=hu-HU` /* TV GENRES */,
];

export async function foo() {
    let i = 1;
    url.forEach((item) => {
        fetch(item)
            .then((response) => response.json())
            .then((data) => {
                writeFileSync(
                    `./exports/genres${i++}.json`,
                    JSON.stringify(data, null, 4)
                );
            })
            .catch((err) => console.error(err));
    });
}

export const tmdbGenres = [
    { id: 10759, name: 'Action & Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 10762, name: 'Kids' },
    { id: 9648, name: 'Mystery' },
    { id: 10763, name: 'News' },
    { id: 10764, name: 'Reality' },
    { id: 10765, name: 'Sci-Fi & Fantasy' },
    { id: 10766, name: 'Soap' },
    { id: 10767, name: 'Talk' },
    { id: 10768, name: 'War & Politics' },
    { id: 37, name: 'Western' },
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
];
/*
"name_hu": "Akció"
"name_hu": "Kaland"
"name_hu": "Fantasy"
"name_hu": "Történelmi"
"name_hu": "Horror"
"name_hu": "Zenei"
"name_hu": "Rejtély"
"name_hu": "Romantikus"
"name_hu": "Sci-Fi"
"name_hu": "TV film"
"name_hu": "Thriller"
"name_hu": "Háborús"
"name_hu": "Action & Adventure"
"name_hu": "Animációs"
"name_hu": "Vígjáték"
"name_hu": "Bűnügyi"
"name_hu": "Dokumentum"
"name_hu": "Dráma"
"name_hu": "Családi"
"name_hu": "Kids"
"name_hu": "Rejtély"
"name_hu": "News"
"name_hu": "Reality"
"name_hu": "Sci-Fi & Fantasy"
"name_hu": "Soap"
"name_hu": "Talk"
"name_hu": "War & Politics"
"name_hu": "Western"
*/
