// ==UserScript==
// @name         Hide useless status message
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       maxime.bourdin.tic@gmail.com
// @match        https://www.twitch.tv/*
// @exclude      *://*.twitch.tv/videos/*
// @exclude      *://*.twitch.tv/*/video/*
// @exclude      *://*.twitch.tv/embed/*
// @exclude      *://*.twitch.tv/popout/*
// @exclude      *://*.twitch.tv/directory/*
// @icon         https://www.google.com/s2/favicons?domain=twitch.tv
// @grant        none
// ==/UserScript==

(function() {
    // Your code here...

    setInterval(() => {
        // var d = document.querySelectorAll("div.chat-line__status[data-a-target='chat-welcome-message']");
        var d = document.querySelectorAll("div.chat-scrollable-area__message-container > div.chat-line__status");
        d.forEach((e, i) => {
            // console.log(e);
            // try {e.parentNode.removeChild(e);} catch (e) {location.reload();}
            e.style = "display: none !important";
        });
    }, 3000);
})();