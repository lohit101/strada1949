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
        document.getElementById("menuTest").style.transform = "translate(0%, 0%)";
        document.getElementById("menuTest").style.margin = ".5rem";
    }

    else {
        menuToggle = false;
        document.getElementById("menuTest").style.transform = "translate(-100%, 0%)";
        document.getElementById("menuTest").style.margin = "0rem";
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
        // console.log(error);
    }

    if (!menuToggle) {
        menuToggle = false;
        document.getElementById("menuTest").style.transform = "translate(-100%, 0%)";
        document.getElementById("menuTest").style.margin = "0rem";
    }

    else {
        menuToggle = false;
        document.getElementById("menuTest").style.transform = "translate(-100%, 0%)";
        document.getElementById("menuTest").style.margin = "0rem";

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

        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= (window.innerHeight - 25)) {

            // console.log('Element ' + i + ' is in the viewport!');

            var list = headingList[i];
            list.scrollTop = (headingList[i].scrollHeight - 75);
        }

        else {

            // console.log('Element ' + i + ' is NOT in the viewport!');
        }
    }
}



















