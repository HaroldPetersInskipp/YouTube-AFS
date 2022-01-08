// ==UserScript==
// @name         Youtube - Auto Focus Search Bar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto focus the search bar in YouTube.
// @author       Inskipp
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/YouTube-AFS/main/icon.png
// ==/UserScript==
var search_panel = document.getElementById("search-input").children[0].focus();
