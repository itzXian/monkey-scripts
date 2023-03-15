// ==UserScript==
// @name         damagepaimon-change-scrollbar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://damage.paimon.app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=damage.paimon.app
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// ==/UserScript==

waitForKeyElements(
  ".gi-scrollbar.v-card.v-sheet",
  setHeight
)

waitForKeyElements(
  "div.v-card__title.pa-3.genshin-header.white--text.d-flex",
  removeElement
)

waitForKeyElements(
  ".v-application",
  setFont
)

function setHeight() {
    const element = document.getElementsByClassName('gi-scrollbar v-card v-sheet');
    element[0].style.height = document.body.clientHeight * 0.9;
    element[1].style.height = document.body.clientHeight * 0.9;
};

function removeElement() {
//    document.getElementsByClassName('v-btn v-btn--icon v-btn--round theme--light v-size--default')[0].remove();
    document.getElementsByClassName('v-btn v-btn--icon v-btn--round theme--light v-size--default')[0].style.height = '28px';
    document.getElementsByClassName('v-image v-responsive mr-1 theme--light')[0].style.maxWidth = '28px';
    document.getElementsByClassName('v-image v-responsive mr-1 theme--light')[1].style.maxWidth = '28px';
    document.getElementsByClassName('v-image v-responsive mr-1 theme--light')[2].style.maxWidth = '28px';
};

function setFont() {
    var font = "Iosevka SS09, Source Code Pro, Consolas, sans-serif";
    document.querySelectorAll('.v-application').forEach(element => {
        element.style.fontFamily = font;
        element.style.fontWeight = "bold";
    });
};

document.body.addEventListener("click", setHeight);
