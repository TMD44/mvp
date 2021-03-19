const imdb_patterns = {
    imdb_title: /tt[0-9]{7}/gi,
    imdb_name: /nm[0-9]{7}/gi,
    imdb_company: /co[0-9]{7}/gi,
    imdb_list: /li[0-9]{7}/gi,
};

function imdbFinder(data) {
    const itemFound = data.match(imdb_patterns.imdb_title)[0];
    if (itemFound != null) {
        return {
            imdb_id: itemFound,
            imdb_url: 'https://www.imdb.com/title/' + itemFound,
        };
    }
}

module.exports.imdbFinder = imdbFinder;
