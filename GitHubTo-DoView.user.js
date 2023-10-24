// ==UserScript==
// @name         GitHub To-Do View
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Removes the "Public" tag from GitHub repos, allowing you to see "Private" tags more easily. Meant for people who use private repos as WIP projects and needs to quickly see what needs work/to be released
// @author       Lumen
// @match        github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant        GM_addStyle
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    console.log("Loaded GitHub To-Do View");

    var tags = document.getElementsByClassName('Label');

    for (var i = 0; i < tags.length; ++i){
        console.log(tags[i]);
        if (tags[i].innerText == 'Public') {
            tags[i].hidden = true;
        }
        if (tags[i].innerText == 'Private') {
            tags[i].style.backgroundColor = "lightcoral";
        }
    }

})();
