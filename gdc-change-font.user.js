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
 waitForKeyElements ("div.accordion-stat-filter", createButton);
 waitForKeyElements ("body > div.gi-modal.gi-window-select.gi-window-select-grouplist", createButton2);
 waitForKeyElements ("body > div.gi-main-container > div.gi-layout-right-container > div > div.gi-tab-right.gi-tab-container.gi-bestart-container.gi-tab-left > div > div.tab-content > div > div.content > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div:nth-child(2) > div.accordion-item-content", createButton3);

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
    let element = "body > div.gi-main-container > div.gi-layout-left-container > div > div.gi-tab-left.gi-tab-container.gi-share-container > div > div.tab-content > div > div.content > div";
    if (document.querySelector(element)) {
        document.querySelector(element).style.maxHeight = window.innerHeight + 'px';
//      document.querySelector(element).style.height = window.innerHeight + 'px';
    };
    document.querySelectorAll("input").forEach( element => (
        element.style.fontFamily = "sans-serif"
    ))
};

function createButton () {
    document.querySelector("div.accordion-stat-filter").insertAdjacentHTML("afterbegin", `

<div class="controls-bar">
    <div class="item">
        <div>
            <div onclick='
                document.querySelector(".accordion-item:last-child").querySelectorAll(".checkbox").forEach( element => {
                    element.click();
                });
            '
                class="inputs-button"><span class="inputs-button-icon icon-ok"></span>Invert select
            </div>
        </div>
    </div>
</div>
    `);
};

function createButton2 () {
    document.querySelector("body > div.gi-modal.gi-window-select.gi-window-select-grouplist > div.gi-modal-content > div.gi-window-select-footer > div.gi-modal-buttons").insertAdjacentHTML("afterbegin", `

<div onclick='
    document.querySelector(".gi-grouplist-items").querySelectorAll(".gi-checkbox-wrapper").forEach( element => {
        element.click();
        });
'
class="gi-inputs-button modal-invert-select"><span class="gi-inputs-button-icon button-icon-ok"></span>Insert Select
</div>
    `);
};

function createButton3 () {
    document.querySelector("body > div.gi-main-container > div.gi-layout-right-container > div > div.gi-tab-right.gi-tab-container.gi-bestart-container.gi-tab-left > div > div.tab-content > div > div.content > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div:nth-child(2) > div.accordion-item-content").insertAdjacentHTML("afterbegin", `

<div class="controls-bar">
    <div class="item">
        <div>
            <div onclick='
                document.querySelector("body > div.gi-main-container > div.gi-layout-right-container > div > div.gi-tab-right.gi-tab-container.gi-bestart-container.gi-tab-left > div > div.tab-content > div > div.content > div > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div > div:nth-child(2) > div.accordion-item-content").querySelectorAll(".checkbox-wrapper").forEach( element => {
                    element.click();
                });
            '
                class="inputs-button"><span class="inputs-button-icon icon-ok"></span>Invert select
            </div>
        </div>
    </div>
</div>
    `);
};

/*
var uncheckCheckbox = (function(element) {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            element.querySelector(".accordion-item:last-child").querySelectorAll(".checkbox").forEach( element => {
                element.click();
            });
        }
    };
})();
*/
