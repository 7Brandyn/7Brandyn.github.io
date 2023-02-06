function navSelector() {
    var n = document.getElementById("myTopnav");
    if (n.className === "topnav") {
        n.className += " responsive";
    } else {
        n.className = "topnav";
    }
}

let title = gsap.timeline({ repeat: -1 });
title.to("h1", 30, { backgroundPosition: "-960px 0" });