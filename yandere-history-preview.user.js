// ==UserScript==
// @name         Yande.re History Preview
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yande.re/history*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yande.re
// @grant        none
// ==/UserScript==

const imgUrls = document.scripts[8].textContent.toString().replace("\\", '').match(/(?<=preview_url":").*?jpg/gm);

let i = 0;
document.querySelectorAll('tr.even,tr.odd').forEach( element => {
    let img = document.createElement("img");
    if (! element.children[2].attributes[0].nodeValue.includes('deleted')) {
        img.src = imgUrls[i];
        i++;
    } else {
        img.src = "https://assets.yande.re/assets/deleted-preview-8d2b089b4ee6ee29830e02fbff9091dda4181717561bd458285288c431c50d38.png";
    };
    element.appendChild(img);
});

/*
while (i < imgUrls.length) {
    let img = document.createElement("img");
    img.src = imgUrls[i];
    document.querySelectorAll('tr.even,tr.odd')[i].appendChild(img);
    i++;
};
*/

document.getElementById('hover-thumb').remove();