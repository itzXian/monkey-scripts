// ==UserScript==
// @name         honeyimpact-change-font
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://gensh.honeyhunterworld.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=honeyhunterworld.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

waitForKeyElements(".gsc-input", cF)
waitForKeyElements(".hamborger_btn_l", btnChange)

function cF() {
    var a = new Array;
    a = [".wp-block-post-comments input[type=submit]", "select", "button", ".sort_input", ".search_input", ".sortable", ".stat_table", ".gsc-input"];
    changeFont(a)
};

function changeFont(array) {
    var font = "Iosevka SS09";
    document.body.style.fontFamily = font;
    array.forEach( i => {
    document.querySelectorAll(i).forEach( element => {
        element.style.fontFamily = font;
    });
    });
}

function btnChange() {
    var element = document.querySelector(".hamborger_btn_l");
    element.style.maxWidth = "3rem";
    element.style.borderRadius = "10px";
}
