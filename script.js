// ==UserScript==
// @name         Youtube - Auto Focus Search Bar
// @namespace    https://github.com/HaroldPetersInskipp
// @version      1.2
// @homepageURL  https://github.com/HaroldPetersInskipp/YouTube-AFS
// @supportURL   https://github.com/HaroldPetersInskipp/YouTube-AFS/issues
// @description  Auto focus the search bar in YouTube.
// @author       Inskipp
// @copyright    2024+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/YouTube-AFS/blob/main/LICENSE
// @match        *://www.youtube.com/*
// @grant        none
// @icon         https://raw.githubusercontent.com/HaroldPetersInskipp/YouTube-AFS/main/icon.png
// ==/UserScript==

(function() {
    'use strict';

    function focusSearch() {
        const searchBox = document.querySelector("input.ytSearchboxComponentInput");
        if (searchBox) {
            searchBox.focus();
        }
    }

    // Run once when page loads
    focusSearch();

    // Also watch for page changes (YouTube is SPA-style)
    const observer = new MutationObserver(focusSearch);
    observer.observe(document.body, { childList: true, subtree: true });
})();
