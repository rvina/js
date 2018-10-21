// ==UserScript==
// @name         BitTube No Offline
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  BitTube Never Stop Ever Again
// @author       ReaperBot
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
        'https://bit.tube/play?hash=BRLhEyKdaHf62aKZCIDK&channel=137892',
        'https://bit.tube/play?hash=BRmj6SSpggn29o9Capck&channel=77280',
        'https://bit.tube/play?hash=BRc0Q1xSlfQitEM1QAdA&channel=77280',
        'https://bit.tube/play?hash=BRzOcz2zbfB4GugyXrNX&channel=78899',
        'https://bit.tube/play?hash=BRFkQ25IaF4JGt0dnpXk&channel=78899',
        'https://bit.tube/play?hash=BRs9cTUOLJmmnNZg8JDG&channel=137892'
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

    setInterval(reloadOk, getRndInteger(2400, 3620));

    function reloadOk() {
        window.location.href = random_item(fileme)
    }

})();
