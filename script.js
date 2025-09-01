// ==UserScript==
// @name         Youtube - Auto Focus Search Bar
// @namespace    https://github.com/HaroldPetersInskipp
// @version      1.4.6
// @homepageURL  https://github.com/HaroldPetersInskipp/YouTube-AFS
// @supportURL   https://github.com/HaroldPetersInskipp/YouTube-AFS/issues
// @downloadURL  https://gist.github.com/HaroldPetersInskipp/5129292f3750d99735c2a8b352a5651c/raw/youtube-afs.user.js
// @updateURL    https://gist.github.com/HaroldPetersInskipp/5129292f3750d99735c2a8b352a5651c/raw/youtube-afs.user.js
// @description  Auto focus the search bar in YouTube.
// @author       Inskipp
// @copyright    2024+, HaroldPetersInskipp (https://github.com/HaroldPetersInskipp)
// @license      MIT; https://github.com/HaroldPetersInskipp/YouTube-AFS/blob/main/LICENSE
// @match        *://www.youtube.com/
// @match        *://www.youtube.com/feed/subscriptions
// @match        *://www.youtube.com/feed/history
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
