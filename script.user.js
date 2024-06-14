const links = document.querySelectorAll('a');

links.forEach(link => {
    if (link.href && link.href.includes("google.com/search")) {
        if (!link.href.includes("&udm=14")) {
            link.href += "&udm=14";
        }
    }
});
