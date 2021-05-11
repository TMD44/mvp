/* eslint-disable consistent-return */
const date = new Date();

export function getDateAndTime(format: 'pretty' | 'bulk' = 'pretty') {
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const sec = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    switch (format) {
        case 'pretty':
            return `${year}.${month}.${day}. ${hour}:${min}:${sec}`;

        case 'bulk':
            return year + month + day + hour + min + sec;

        default:
            return `${year}.${month}.${day}. ${hour}:${min}:${sec}`;
    }
}
