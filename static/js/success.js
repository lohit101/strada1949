var windowLocation = window.location.href.split("?")[1];
var confirmPayment = document.getElementById("confirmPayment");
var confirmWrapper = document.getElementById("confirmWrapper");
var confirmWrapperN = document.getElementById("confirmWrapperN");

if (windowLocation === "completion=true") {
    confirmPayment.style.display = "none";
    confirmWrapper.style.display = "flex";

    var passVal = JSON.parse(sessionStorage["passVal"]);
    var passData = JSON.parse(sessionStorage["passData"]);

    var parent = document.getElementById("submission");

    var child = document.createElement("input");
    child.setAttribute("type", "hidden");
    child.setAttribute("name", "First Name");
    child.setAttribute("value", passData["fname"]);
    parent.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "hidden");
    child.setAttribute("name", "Last Name");
    child.setAttribute("value", passData["lname"]);
    parent.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "hidden");
    child.setAttribute("name", "Phone");
    child.setAttribute("value", passData["pcode"] + " " + passData["phone"]);
    parent.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "hidden");
    child.setAttribute("name", "E-mail");
    child.setAttribute("value", passData["email"]);
    parent.appendChild(child);

    let nKey = Object.keys(passVal);

    var nCount = 0;

    for (let key in nKey) {
        ++nCount;
    }

    for (var pk = 0; pk < nCount; pk++) {
        child = document.createElement("input");
        child.setAttribute("type", "hidden");
        child.setAttribute("name", "Product" + " " + [pk + 1]);
        child.setAttribute("value", "Product ID: " + passVal[pk]["productID"] + ", Product Name: " + passVal[pk]["name"] + ", Size: " + passVal[pk]["size"]);
        parent.appendChild(child);
    }

    parent.submit();
}

else if (windowLocation === "completion=true&submission=true") {
    confirmPayment.style.display = "none";
    confirmWrapper.style.display = "flex";

    window.addEventListener("beforeunload", () => {
        sessionStorage.clear();
    });
}

else {
    confirmPayment.style.display = "flex";
    confirmWrapper.style.display = "none";
}
