// ==UserScript==
// @name Twitch Auto Channel Points Claimer
// @version     1.6
// @author      maxime.bourdin.tic@gmail.com
// @description Automatically claim channel points.
// @match       https://www.twitch.tv/*
// @match       https://dashboard.twitch.tv/*
// @license     MIT
// @grant       none  
// @namespace    
// @exclude     *://*.twitch.tv/videos/*
// @exclude     *://*.twitch.tv/*/video/*
// @exclude     *://*.twitch.tv/embed/*
// @exclude     *://*.twitch.tv/popout/*
// @exclude     *://*.twitch.tv/directory/*
// ==/UserScript==

let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let claiming = false;
if (MutationObserver) console.log('Auto claimer is enabled.');
let observer = new MutationObserver(e => {
    let bonus = document.querySelector('.claimable-bonus__icon');
    if (bonus && !claiming) {
        bonus.click();
        let date = new Date();
        claiming = true;
        setTimeout(() => {
            console.log('Claimed at '+date);
            claiming = false;
        }, Math.random() * 1000 + 2000);
    }
});
observer.observe(document.body, {childList: true, subtree: true});
