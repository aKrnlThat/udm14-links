// ==UserScript==
// @name         UDM 14 Links
// @namespace    http://tampermonkey.net/
// @version      2024-06-16
// @description  Adds udm=14 parameter to all Google links on any page for a cleaner look
// @author       aKrnlThat and contributors
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
const links = document.querySelectorAll('a');

links.forEach(link => {
    if (link.href && link.href.includes("google.com/search")) {
        if (!link.href.includes("&udm=14")) {
            link.href += "&udm=14";
        }
    }
});
})();
