export const tmdbGenres = {
    10759: { id: 10759, name: 'Action & Adventure' },
    16: { id: 16, name: 'Animation' },
    35: { id: 35, name: 'Comedy' },
    80: { id: 80, name: 'Crime' },
    99: { id: 99, name: 'Documentary' },
    18: { id: 18, name: 'Drama' },
    10751: { id: 10751, name: 'Family' },
    10762: { id: 10762, name: 'Kids' },
    9648: { id: 9648, name: 'Mystery' },
    10763: { id: 10763, name: 'News' },
    10764: { id: 10764, name: 'Reality' },
    10765: { id: 10765, name: 'Sci-Fi & Fantasy' },
    10766: { id: 10766, name: 'Soap' },
    10767: { id: 10767, name: 'Talk' },
    10768: { id: 10768, name: 'War & Politics' },
    37: { id: 37, name: 'Western' },
    28: { id: 28, name: 'Action' },
    12: { id: 12, name: 'Adventure' },
    14: { id: 14, name: 'Fantasy' },
    36: { id: 36, name: 'History' },
    27: { id: 27, name: 'Horror' },
    10402: { id: 10402, name: 'Music' },
    10749: { id: 10749, name: 'Romance' },
    878: { id: 878, name: 'Science Fiction' },
    10770: { id: 10770, name: 'TV Movie' },
    53: { id: 53, name: 'Thriller' },
    10752: { id: 10752, name: 'War' },
};

export const genresConvert = (genresArray: number[]) => {
    const result: any[] = [];
    genresArray.forEach((genre) => {
        result.push(tmdbGenres[genre].name);
    });
    return result;
};

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

/*
import { writeFileSync } from 'fs';

const url = [
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${tmdbApiKey}&language=hu-HU`, // MOVIE GENRES
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${tmdbApiKey}&language=hu-HU`, // TV GENRES
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
*/
