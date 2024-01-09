// ==UserScript==
// @name        disable auto zoom in when focus on input field for iOS Safari
// @namespace   Violentmonkey Scripts
// @match       <all_urls>
// @grant       none
// @version     1.0
// @author      -
// @description 1/9/2024, 8:43:16 AM       
// ==/UserScript==

/*
var url = function() {
    let element = document.querySelector("link[rel=stylesheet]");
    return element.baseURI + element.attributes.href.value
}
fetch(url()).then((response) => response.text())
  .then((data) => console.log(data));
*/

document.querySelector("html > head").insertAdjacentHTML("beforeend", `
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
`)