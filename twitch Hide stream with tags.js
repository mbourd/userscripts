// ==UserScript==
// @name         Remove stream
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hide stream with specific tags
// @author       maxime.bourdin.tic@gmail.com
// @match        https://www.twitch.tv/directory/game/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// ==/UserScript==

(function() {
    var selectors = [
        //"button.tw-tag[aria-label='Speedrun']",
    ];
    setInterval(() => {
        document.querySelectorAll(selectors.join(",")).forEach((e,i) => {
            var parent = e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            // try {parent.parentNode.removeChild(parent);} catch (e) {location.reload();}
            parent.style = "display: none !important";
        });

        if (!location.href.match(/^(https:\/\/www.twitch.tv\/directory\/game\/)/g)) {
            location.reload();
        }
    }, 666);

    // Your code here...
})();
