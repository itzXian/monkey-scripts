// ==UserScript==
// @name           nHentai English Filter
// @description    Adds quick English filter to nHentai pages.
// @author         Hen-Tie
// @homepage       https://hen-tie.tumblr.com/
// @namespace      https://greasyfork.org/en/users/8336
// @include        /https:\/\/nhentai\.net\/(parody|favorites|artist|tag|group|category|search)\/(?!.*japanese)/
// @icon           https://i.imgur.com/pGYy5SR.png
// @version        5.2
// @downloadURL https://update.sleazyfork.org/scripts/374089/nHentai%20English%20Filter.user.js
// @updateURL https://github.com/itzXian/monkey-scripts/raw/refs/heads/master/nHentai%20English%20Filter-5.2.user.js
// ==/UserScript==
var pathname = window.location.pathname;
var namespaceQuery = window.location.pathname.split('/')[2];
var searchQuery = window.location.search.split('=')[1];
var namespaceSearchLink = '<div class="sort-type"><a href="https://nhentai.net/search/?q=' + namespaceQuery + '+language:japanese -language:english -language:chinese">日本語のみ</a></div>';
var siteSearchLink = '<div class="sort-type"><a href="https://nhentai.net/search/?q=' + searchQuery + '+language:japanese -language:english -language:chinese">日本語のみ</a></div>';
var favSearchBtn = '<a class="btn btn-primary" href="https://nhentai.net/favorites/?q=language:japanese -language:english -language:chinese+' + searchQuery + '"><i class="fa fa-flag"></i> JP</a>';
var favPageBtn = '<a class="btn btn-primary" href="https://nhentai.net/favorites/?q=language:japanese -language:english -language:chinese+"><i class="fa fa-flag"></i> JP</a>';

if (/\/(artist|tag|group|category|parody)\//.test(pathname)) { // namespace searches
	document.getElementsByClassName('sort')[0].innerHTML += namespaceSearchLink;
} else if (/\/search\//.test(pathname)) { // general searches
	document.getElementsByClassName('sort')[0].innerHTML += siteSearchLink;
} else if (/\/favorites\//.test(pathname)) { // fav searches
	if (window.location.search.length) {
		document.getElementById('favorites-random-button').insertAdjacentHTML('afterend', favSearchBtn);
	} else {
		document.getElementById('favorites-random-button').insertAdjacentHTML('afterend', favPageBtn);
	}
}
