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
 waitForKeyElements ("div.char-info", setCharacterHeight);
 waitForKeyElements (".accordion-item:last-child", uncheckCheckbox);

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
    document.querySelectorAll('div.full-height-wrapper').forEach( element => {
        if (element.style.maxHeight) {
            element.style.maxHeight = window.innerHeight + 'px';
            element.style.height = window.innerHeight + 'px'
        };
    });
};

function setCharacterHeight() {
    if (document.querySelector('body > div.gi-main-container > div.gi-layout-left-container > div > div.gi-tab-left.gi-tab-container.gi-share-container > div > div.tab-content > div > div.content > div')) {
        document.querySelector('body > div.gi-main-container > div.gi-layout-left-container > div > div.gi-tab-left.gi-tab-container.gi-share-container > div > div.tab-content > div > div.content > div').style.maxHeight = window.innerHeight + 'px';
        document.querySelector('body > div.gi-main-container > div.gi-layout-left-container > div > div.gi-tab-left.gi-tab-container.gi-share-container > div > div.tab-content > div > div.content > div').style.height = window.innerHeight + 'px';
    };
    document.querySelectorAll("input").forEach( element => (
        element.style.fontFamily = "sans-serif"
    ))
};

function uncheckCheckbox () {
    document.querySelector(".accordion-item:last-child").querySelectorAll(".checkbox").forEach( element => {
        element.checked = false;
    });
};
