const menuClose = "M-20916.344-23455.738h22.5";
const menuOpen = "M-20916.344-23455.738h9.188";

const menuBtn = document.querySelector("#menuBtn");

let menuToggle = false;

menuBtn.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    timeline.add({
        targets: ".menuOpen",
        d: [
            { value: menuToggle ? menuClose : menuOpen }
        ]
    })

    if (!menuToggle) {
        menuToggle = true;
        document.getElementById("menuTest").style.opacity = "1";
        document.getElementById("menuTest").style.pointerEvents = "all";
        document.getElementById("menuLinkWrapper").style.transition = "500ms ease-out";
        document.getElementById("menuLinkWrapper").style.opacity = "1";
    }
    
    else {
        menuToggle = false;
        document.getElementById("menuLinkWrapper").style.transition = "250ms ease-out";
        document.getElementById("menuLinkWrapper").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("menuTest").style.opacity = "0";
            document.getElementById("menuTest").style.pointerEvents = "none";
        }, 300);
    }
});

var lastScroll = 0;

window.onscroll = () => {

    try {
        document.getElementById("heroImg").style.width = 100 - (window.scrollY / 40) + "%";
        document.getElementById("heroImg").style.borderRadius = window.scrollY / 70 + "px";
        document.getElementById("heroHeading").style.opacity = 1 - (window.scrollY / 500);
        document.getElementById("heroSubheading").style.opacity = 1 - (window.scrollY / 500);
    }

    catch (error) {
        console.log(error);
    }

    if (!menuToggle) {
        menuToggle = false;
        document.getElementById("menuLinkWrapper").style.transition = "250ms ease-out";
        document.getElementById("menuLinkWrapper").style.opacity = "0";
        document.getElementById("menuTest").style.opacity = "0";
        document.getElementById("menuTest").style.pointerEvents = "none";
    }

    else {
        menuToggle = false;
        document.getElementById("menuLinkWrapper").style.transition = "250ms ease-out";
        document.getElementById("menuLinkWrapper").style.opacity = "0";
        document.getElementById("menuTest").style.opacity = "0";
        document.getElementById("menuTest").style.pointerEvents = "none";

        const timeline = anime.timeline({
            duration: 750,
            easing: "easeOutExpo"
        });

        timeline.add({
            targets: ".menuOpen",
            d: [
                { value: menuToggle ? menuOpen : menuClose }
            ]
        })
    }

    var headingList = document.querySelectorAll(".testul");

    for (var i = 0; i < headingList.length; i++) {

        var myElement = headingList[i];
        var bounding = myElement.getBoundingClientRect();

        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= (window.innerHeight - 100)) {

            var list = headingList[i];
            list.scrollTop = (headingList[i].scrollHeight - 75);
        }
    }

    var buyWindow = document.getElementById("buyWindow");

    if (window.scrollY >= lastScroll) {
        buyWindow.style.transform = "translateY(100%)";
        lastScroll = window.scrollY;
    }
    else {
        buyWindow.style.transform = "translateY(0%)";
        lastScroll = window.scrollY;
    }
}

window.onload = function () {
    document.getElementById("preloaderWrapper").style.opacity = "0";
    document.getElementById("preloaderWrapper").style.pointerEvents = "none";
}

var carousel = document.getElementById("prodImgWrapper");
var carouselSlider = document.getElementById("carouselSlider");

carousel.addEventListener("scroll", function () {
    setTimeout(() => {
        var barWidth = (carousel.scrollLeft * 100) / (carousel.scrollWidth - window.innerWidth);
        if (carousel.scrollLeft >= 0) {
            carouselSlider.style.left = barWidth + "%";
        }
        else {
            carouselSlider.style.left = barWidth + "%";
        }
    }, 1);
});















