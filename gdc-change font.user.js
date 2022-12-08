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
 waitForKeyElements ("div.main-stat", setArtifactHeight);
 waitForKeyElements ("div.gi-char-info-name", setCharacterHeight);

function Main() {
    'use strict';
    var font = "sans-serif";
    document.body.style.fontFamily = font;
    document.body.style.fontWeight = "bold";
    document.body.style.background = "#2e3440";
    document.querySelectorAll('.name').forEach(element => {
        element.style.fontFamily = font;
        element.style.fontWeight = "bold";
    });
};
function setArtifactHeight() {
    document.querySelectorAll('div.full-height-wrapper').forEach( element => (
        element.style.maxHeight = ""
    ));
}
function setCharacterHeight() {
    document.querySelector('div.gi-char-list-items-wrapper').style.maxHeight = "";
    document.querySelectorAll("input").forEach( element => (
        element.style.fontFamily = "sans-serif"
    ))
};
