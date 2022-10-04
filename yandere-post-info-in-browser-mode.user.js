// ==UserScript==
// @name         Yande.re Post Info in Browser Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yande.re/post/browse
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yande.re
// @grant        none
// ==/UserScript==

function main() {
  const postInfo = document.querySelector('.post-info');
  const isShow = postInfo.style.display === "";
  postInfo.style.display = isShow ? "none" : "";
};
document.querySelector('div.image-container').addEventListener('click', main, false);

/*
function main() {
    if (document.querySelector('.post-info').style.display === "") {
        document.querySelector('.post-info').style.display = "none";
    } else {
        document.querySelector('.post-info').style.display = "";
    };
};

document.querySelector('div.image-container').addEventListener('dblclick', main, false);
*/