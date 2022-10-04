// ==UserScript==
// @name         GDC Change Font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://genshin.aspirine.su/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=genshin.aspirine.su
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

 waitForKeyElements (".name", Main);

function Main() {
    'use strict';
    var font = "Iosevka SS09, Source Code Pro, Consolas, sans-serif";
    document.body.style.fontFamily = font;
    document.body.style.fontWeight = "bold";
    document.querySelectorAll('.name').forEach(element => {
        element.style.fontFamily = font;
        element.style.fontWeight = "bold";
    });
};