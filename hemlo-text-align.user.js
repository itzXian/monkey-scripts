// ==UserScript==
// @name         Genshin Team Creater Text Align
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://genshin.hemlo.cc/*
// @icon         https://genshin.hemlo.cc/partybuilder/favicon.ico
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

waitForKeyElements ("picture[data-v-1330d100]", removeBackgroundPicture);
waitForKeyElements (".wrapper[data-v-474eccbc]", textAlign);
waitForKeyElements ("figure figcaption[data-v-d5f09996]", hideName);
waitForKeyElements ("div.button-wrapper button", el);
waitForKeyElements (".owned > picture.portrait", hidePlaceholder);

function removeBackgroundPicture() {
    document.querySelector("picture[data-v-1330d100]").remove();
};

(function changeFont () {
    document.querySelector("head > style").innerText = `
        @font-face {
            font-family: sans-serif;
		    font-weight: bold;
            text-transform: uppercase;
        }
        nav, button {
            text-transform: uppercase;
        }
    `;
})();

function textAlign () {
    document.querySelectorAll(".wrapper[data-v-474eccbc]").forEach( element => {
        element.style.textAlign = "left";
        element.style.fontSize = "medium";
        element.style.fontWeight = "bold";
        element.lastChild.style.backgroundColor = "#fff0";
        element.firstChild.innerHTML = element.firstChild.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    });
};

function hideName() {
    document.querySelectorAll("figure figcaption[data-v-d5f09996]").forEach( element => {
        element.style.fontSize = 0;
    });
};

function hidePlaceholder() {
    document.querySelectorAll('.owned').forEach( element => {
        if (element.querySelector('.portrait').outerHTML.includes('placeholder')) {
            element.style.opacity= 0;
        };
    });
};

function el() {
    document.querySelector('.button-wrapper button').addEventListener("click", textAlign, false);
};
