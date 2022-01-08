// ==UserScript==
// @name         Youtube - Auto Focus Search Bar
// @namespace    https://github.com/HaroldPetersInskipp
// @version      1.0
// @homepage     https://github.com/HaroldPetersInskipp/YouTube-AFS
// @description  Auto focus the search bar in YouTube.
// @author       Inskipp
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/YouTube-AFS/main/icon.png
// @match        *://www.youtube.com/*
// ==/UserScript==
var search_panel = document.getElementById("search-input").children[0].focus();
