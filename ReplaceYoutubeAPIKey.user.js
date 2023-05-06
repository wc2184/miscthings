// ==UserScript==
// @name         Replace Youtube API Key For Matt's Youtube API Metadata Search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mattw.io/youtube-metadata*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mattw.io
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Put your Youtube Data API V3 key here
  const API_KEY = "replaceThisStringWithYourAPIKeyString";

  setTimeout(() => {
    youtube.setDefaultKey(API_KEY);
  }, 500);
})();
