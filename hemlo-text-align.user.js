// ==UserScript==
// @name         Genshin Team Creater Text Align
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://genshin.hemlo.cc/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hemlo.cc
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

waitForKeyElements ("picture[data-v-1330d100]", removeBackgroundPicture);
waitForKeyElements (".wrapper[data-v-474eccbc]", textAlign);
waitForKeyElements ("div.button-wrapper button", el);

function removeBackgroundPicture() {
    document.querySelector("picture[data-v-1330d100]").remove();
};

function textAlign () {
    document.querySelectorAll(".wrapper[data-v-474eccbc]").forEach( element => {
    element.style.textAlign = "left";
    });
};

function el() {
    document.querySelector('.button-wrapper button').addEventListener("click", textAlign, false);
};