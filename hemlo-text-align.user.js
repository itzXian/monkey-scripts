// ==UserScript==
// @name         hemlo-text-align
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

waitForKeyElements ("picture[data-v-b58a87c8]", removeBackgroundPicture);
// waitForKeyElements (".wrapper[data-v-474eccbc]", textAlign);
//waitforKeyElements ("div.name", supportHyperText);
waitForKeyElements ("div.name", el);
waitForKeyElements ("figcaption", hideName);
waitForKeyElements (".owned > picture.portrait", hidePlaceholder);
waitForKeyElements ("#available-characters[data-v-ecedbdd2]", ffFix);

function removeBackgroundPicture() {
    document.querySelector("picture[data-v-b58a87c8]").remove();
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

/**
function textAlign () {
    document.querySelectorAll(".wrapper[data-v-474eccbc]").forEach( element => {
        element.style.textAlign = "left";
        element.style.fontSize = "medium";
        element.style.fontWeight = "bold";
        element.lastChild.style.backgroundColor = "#fff0";
        element.firstChild.innerHTML = element.firstChild.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    });
};
**/

function hideName() {
    document.querySelectorAll("figure figcaption[data-v-3309cce5]").forEach( element => {
        // element.style.fontSize = 0;
        element.remove();
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
//    document.querySelector('.button-wrapper button').addEventListener("click", textAlign, false);
    document.querySelector('body').addEventListener("click", supportHyperText, false);
};

function supportHyperText() {
    document.querySelectorAll("div.name").forEach( element => {
        element.innerHTML = element.innerText;
    });
};

function ffFix() {
    var element = document.querySelector("#available-characters[data-v-ecedbdd2]");
    element.style.width = "90%";
    document.querySelector("body > main > div.button-wrapper > button").click();
    //elememt.style.maxWidth = "100%";
}
