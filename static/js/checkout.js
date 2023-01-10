var vals = document.querySelectorAll(".couponInp");
var continueBtn = document.getElementById("continueBtn");

var indexes = ["fname", "lname", "pcode", "phone", "email", "address1", "address2", "landmark", "city", "state", "country", "zip"];

finalList = {}

continueBtn.addEventListener("click", () => {

    for (var i = 0; i < vals.length; i++) {

        if (vals[i].value === undefined) {
            finalList[indexes[i]] = vals[i].innerHTML;
        }
        
        else {
            finalList[indexes[i]] = vals[i].value;
        }
    }

    sessionStorage["passData"] = JSON.stringify(finalList);

});