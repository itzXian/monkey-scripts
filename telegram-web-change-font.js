// ==UserScript==
// @name        Telegram Web
// @namespace   Violentmonkey Scripts
// @match       https://web.telegram.org/z/
// @grant       none
// @version     1.0
// @author      -
// @description 3/6/2023, 8:43:16 AM
// @icon        https://web.telegram.org/z/favicon.svg
// ==/UserScript==
document.querySelector("html > head").insertAdjacentHTML("beforeend", `
<style>
* {
    --font-family: "Noto Sans", sans-serif;
    --font-family-monospace: "Iosevka SS09", monospace;
}
</style>
`)
document.body.style.fontFamily = '"Noto Sans", sans-serif';
