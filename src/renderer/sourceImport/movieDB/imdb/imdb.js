let imdb_patterns = {
    imdb_title: /tt[0-9]{6,8}/gi,
    imdb_name: /nm[0-9]{6,8}/gi,
    imdb_company: /co[0-9]{6,8}/gi,
    imdb_list: /li[0-9]{6,8}/gi,
};

function imdbFinder(data) {
    let itemFound = data.match(imdb_patterns.imdb_title)[0];
    if (itemFound != null) {
        return {
            id: itemFound,
            url: 'https://www.imdb.com/title/' + itemFound,
        };
    }
}

module.exports.imdbFinder = imdbFinder;
