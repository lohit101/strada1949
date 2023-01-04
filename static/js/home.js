var sizeList = document.querySelectorAll(".sizeSelectLi");
var size = "";

for (var q = 0; q < sizeList.length; q++) {
    sizeList[q].addEventListener("click", function (e) {

        for (var j = 0; j < sizeList.length; j++) {
            sizeList[j].style.opacity = "0.5";
        }

        size = this.dataset.index;
        this.style.opacity = "1";
    });
};


try {

    var slider = document.getElementById("confirm");

    slider.addEventListener("change", function () {
        if (size != "") {
            if (slider.value >= 80) {
                slider.value = "100";
                document.querySelector(".buyWindow").style.transition = "500ms ease";
                document.querySelector(".buyWindow").style.opacity = "0";
                document.querySelector(".buyWindow").style.pointerEvents = "none";
                var productHeading = document.getElementById("productHeading").innerHTML;
                var productID = document.getElementById("productID").value;
                sessionStorage.setItem(productID, [
                    productHeading,
                    size
                ]);

                var addedHeading = document.getElementById("addedHeading");
                var addedWrapper = document.getElementById("addedWrapper");
                var addedTimer = document.getElementById("addedTimer");

                addedHeading.innerHTML = productHeading;
                addedWrapper.classList.add("addedWrapperAnim");
                addedTimer.classList.add("addedAnim");
            }

            else {
                slider.value = "0";
            }
        }

        else {
            slider.value = "0";
        }
    });


} catch (error) {

}
