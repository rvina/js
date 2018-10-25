// ==UserScript==
// @name         Ngentube
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  BitTube Ngacengg
// @author       ReaperBot, Kimcil
// @updateURL    https://raw.githubusercontent.com/rvina/js/master/sip.js
// @downloadURL  https://raw.githubusercontent.com/rvina/js/master/sip.js
// @match        *.bit.tube/*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var page
    var offline
    var selected
    var bittube
    

    var fileme = [
        'https://bit.tube/play?hash=BRQr1rOnUa2Gr1ZF1Pla&channel=146670',
        'https://bit.tube/play?hash=BRpBlRrwR04kBbIIBCTi&channel=137892',
        'https://bit.tube/play?hash=BRbrbhsWvoTpGUTW382G&channel=143288',
        'https://bit.tube/play?hash=BRGm3fZEwIfOgfqdPZR3&channel=63823',
        'https://bit.tube/play?hash=BRr7Cna0YwhnmfdNTO59&channel=143288',
        'https://bit.tube/play?hash=BRPiC6RlZ1NYX2ffU3Cm&channel=63823',
        'https://bit.tube/play?hash=BRWdj3tBUJnIt1FyeYcy&channel=146670',
        'https://bit.tube/play?hash=BRTj8X5LeumktqsL6XF0&channel=137892'
    ];
    
    setInterval(mySearch, 5000);
    
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function mySearch() {
        page = document.body.textContent.toLowerCase() || document.body.innerText.toLowerCase();
        offline = page.indexOf("offline") !== -1;
        selected = page.indexOf("selected") !== -1;
        bittube = page.indexOf("bittube") == -1;
        if (offline || selected || bittube) {
            setTimeout(function () {
                window.location.href = random_item(fileme)
            }, 3000);
        }
    }

    

    function getRndInteger(min, max) {
        return (Math.floor(Math.random() * (max - min)) + min) * 1000;
    }

    setInterval(reloadOk, getRndInteger(5760, 7200));

    function reloadOk() {
        window.location.href = random_item(fileme)
    }

})();
