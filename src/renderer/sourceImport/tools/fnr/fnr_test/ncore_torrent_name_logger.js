// ==UserScript==
// @name         Neptun_torrent_names_to_console
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://ncore.pro/torrents.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    for (let i = 1; i < 100; i++) {
        console.log(document.querySelectorAll(".torrent_txt")[i].children.item(0).title);
    }

})();