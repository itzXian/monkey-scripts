// ==UserScript==
// @name         Enka Change Font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://enka.network/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=enka.network
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

 waitForKeyElements (".Card", Main);

function Main() {
    'use strict';
    var font = '"Noto Sans", sans-serif';
    document.querySelectorAll(".Card, .Substat, .CharacterList, .title, .stats, .level,  h3, p, b, .svelte-grjiuv").forEach(element => {
        element.style.fontFamily = font;
        element.style.fontWeight = 600;
    });
}
