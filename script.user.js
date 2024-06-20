// ==UserScript==
// @name         UDM 14 Links
// @namespace    http://tampermonkey.net/
// @version      2024-06-16
// @description  Adds udm=14 parameter to all Google links on any page for a cleaner look
// @author       aKrnlThat and contributors
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function () {
  // REPLACING LINKS
  const links = document.querySelectorAll("a");

  links.forEach((link) => {
    if (link.href && link.href.includes("google.com/search")) {
      if (!link.href.includes("&udm=14")) {
        link.href += "&udm=14";
      }
    }
  });

  // UPDATE MECHANISM
  function checkForUpdates() {
    const scriptCurrentVersion = "v1.0.2";
    fetch("https://github.com/aKrnlThat/udm14-links/raw/main/latestVersion.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("udm14-links/Update mechanism: Network response was not ok");
        }
        return response.text();
      })
      .then((scriptLatestVersion) => {
        scriptLatestVersion = scriptLatestVersion.trim();

        if (scriptCurrentVersion !== scriptLatestVersion) {
          console.log(
            "udm14-links/Update mechanism: A new update is available. Get it at https://github.com/aKrnlThat/udm14-links/releases"
          );
        } else {
          console.log("udm14-links/Update mechanism: Up-to-date version used. Hooray!");
        }
      })
      .catch((error) => {
        console.error("udm14-links/Update mechanism: There was a problem with the fetch operation:", error);
      });
  }

  checkForUpdates();
})();
