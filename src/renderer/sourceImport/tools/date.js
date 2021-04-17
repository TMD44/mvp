const date = new Date();

/**
 * @param {string} format
 * * 'pretty' => 2021.01.21. 12:01:21 (default)
 * * 'bulk'   => 20210121120121
 */
export function getDateAndTime(format = 'pretty') {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const sec = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    if (format == 'pretty') {
        return year + '.' + month + '.' + day + '. ' + hour + ':' + min + ':' + sec;
    } else if (format == 'bulk') {
        return year + month + day + hour + min + sec;
    }
}
