const menuClose = "M36.5,98.5H54.621A1.79,1.79,0,0,0,56.7,96.593a2.046,2.046,0,0,0-2.075-2.155H33.589a1.737,1.737,0,0,1-1.96-1.93,1.759,1.759,0,0,1,1.96-1.953h17.8";
const menuOpen = "M54.621,94.439H33.589";

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
        document.getElementById("tapetext1").style.transition = "450ms cubic-bezier(.1,.26,.26,1)";
        document.getElementById("tapetext2").style.transition = "500ms cubic-bezier(.1,.26,.26,1)";
        document.getElementById("tapetext1").style.top = "50%";
        document.getElementById("tapetext2").style.top = "50%";
        document.getElementById("tapetext1").style.left = "-20%";
        document.getElementById("tapetext2").style.left = "-20%";
        setTimeout(() => {
            document.getElementById("tapetext1").style.opacity = "1";
            document.getElementById("tapetext2").style.opacity = "1";
        }, 300);
    }
    
    else {
        menuToggle = false;
        document.getElementById("menuLinkWrapper").style.transition = "250ms ease-out";
        document.getElementById("menuLinkWrapper").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("menuTest").style.opacity = "0";
            document.getElementById("menuTest").style.pointerEvents = "none";
        }, 300);
        document.getElementById("tapetext1").style.top = "150%";
        document.getElementById("tapetext2").style.top = "150%";
        document.getElementById("tapetext1").style.left = "2.5%";
        document.getElementById("tapetext2").style.left = "-40%";
    }
});

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
        document.getElementById("tapetext1").style.top = "150%";
        document.getElementById("tapetext2").style.top = "150%";
        document.getElementById("tapetext1").style.left = "2.5%";
        document.getElementById("tapetext2").style.left = "-40%";
    }

    else {
        menuToggle = false;
        document.getElementById("menuLinkWrapper").style.transition = "250ms ease-out";
        document.getElementById("menuLinkWrapper").style.opacity = "0";
        document.getElementById("menuTest").style.opacity = "0";
        document.getElementById("menuTest").style.pointerEvents = "none";
        document.getElementById("tapetext1").style.top = "150%";
        document.getElementById("tapetext2").style.top = "150%";
        document.getElementById("tapetext1").style.left = "2.5%";
        document.getElementById("tapetext2").style.left = "-40%";

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















