// ==UserScript==
// @name         Youtube - Auto Focus Search Bar
// @namespace    https://github.com/HaroldPetersInskipp
// @version      1.0
// @homepageURL  https://github.com/HaroldPetersInskipp/YouTube-AFS
// @supportURL   https://github.com/HaroldPetersInskipp/YouTube-AFS/issues
// @description  Auto focus the search bar in YouTube.
// @author       Inskipp
// @copyright    2022+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/YouTube-AFS/master/LICENSE
// @match        *://www.youtube.com/*
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/YouTube-AFS/main/icon.png
// @grant        none
// ==/UserScript==

var search_panel = document.getElementById("search-input").children[0].focus();
