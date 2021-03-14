let date = new Date();

//2021.01.21. 12:01:21
function getDateAndTime() {
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let hour = ("0" + date.getDate()).slice(-2) + ". " + date.getHours();
    let min = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let sec = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

    return year + "." + month + "." + hour + ":" + min + ":" + sec;
}

module.exports.getDateAndTime = getDateAndTime;
