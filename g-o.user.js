// ==UserScript==
// @name        g-o
// @namespace   Violentmonkey Scripts
// @match       https://frzyc.github.io/genshin-optimizer/
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2023, 8:43:16 AM
// @icon        https://frzyc.github.io/genshin-optimizer/favicon.ico
// ==/UserScript==

/*
var url = function() {
    let element = document.querySelector("link[rel=stylesheet]");
    return element.baseURI + element.attributes.href.value
}
fetch(url()).then((response) => response.text())
  .then((data) => console.log(data));
*/

document.querySelector("link[rel=stylesheet]").remove();
document.querySelector("html > head").insertAdjacentHTML("beforeend", `
<style>
* {
    font-family: "Noto Sans", sans-serif;
    font-family-monospace: "Iosevka SS09", monospace;
}
.text-halfsize {
    font-size: 50%;
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
.grad-1star {
    background-image: linear-gradient(to bottom right, #4f5864, #838f99);
}
.grad-2star {
    background-image: linear-gradient(to bottom right, #48575c, #5e966c);
}
.grad-3star {
    background-image: linear-gradient(to bottom right, #515474, #499fb3);
}
.grad-4star {
    background-image: linear-gradient(to bottom right, #595482, #b886ca);
}
.grad-5star {
    background-image: linear-gradient(to bottom right, #695453, #e6ac54);
}
div#formula {
    padding-left: 2em;
    text-indent: -2em;
}
div#formula > * {
    padding-left: 0;
    text-indent: 0;
}
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
}
.css-1qjkq4 {
    background-color: #0C1020C0;
    backdrop-filter: blur(20px);
}
.css-1xff9li {
    background-color: #0C1020C0;
    backdrop-filter: blur(20px);
    background-image: none;
}
.css-yl7lcc {
    background-color: #0C1020;
}
.css-k008qs {
　　background-color: #0C1020;
}
</style>
`)
