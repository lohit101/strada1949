var windowLocation = window.location.href.split("?")[1];
var confirmPayment = document.getElementById("confirmPayment");
var confirma = document.getElementById("confirm");
var confirmWrapper = document.getElementById("confirmWrapper");
var confirmWrapperN = document.getElementById("confirmWrapperN");

if (windowLocation === "completion=true") {
    confirmPayment.style.display = "flex";
    confirmWrapper.style.display = "none";

    var passVal = JSON.parse(sessionStorage["passVal"]);
    var passData = JSON.parse(sessionStorage["passData"]);

    var submission = document.querySelectorAll(".hiddenInput");
    
    submission[0].value = passData["fname"] + " " + passData["lname"];
    submission[1].value = passData["pcode"] + " " + passData["phone"];
    submission[2].value = passData["email"];
    
    let nkList = Object.keys(passVal);
    
    var nkListVal = 0;
    
    for (let key in nkList) {
        ++nkListVal;
    }
    
    var orderString = "";
    
    for (var nk = 0; nk < nkListVal; nk++) {
        
        orderString += "Product ID: " + passVal[nk]["productID"] + ", Name: " + passVal[nk]["name"] + ", Size: " + passVal[nk]["size"] + " // ";
        
    }
    
    submission[3].value = orderString;
    submission[4].value = passData["address1"] + ", " + passData["address2"] + ", " + passData["landmark"] + ", " + passData["city"] + ", " + passData["state"] + ", " + passData["country"] + ", " + passData["zip"]
    
    document.getElementById("submission").submit();

}

else if (windowLocation === "completion=true&submission=true") {
    confirmPayment.style.display = "none";
    confirmWrapper.style.display = "flex";
    
    var passVal = JSON.parse(sessionStorage["passVal"]);
    var passData = JSON.parse(sessionStorage["passData"]);
    
    var child = document.createElement("div");
    child.setAttribute("class", "confirmPlacement");
    child.setAttribute("id", "confirmPlacement");
    confirmWrapper.appendChild(child);
    
    var parent = document.getElementById("confirmPlacement");
    
    child = document.createElement("hr");
    parent.appendChild(child);
    
    child = document.createElement("img");
    child.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE20lEQVR4nO1aTWhcVRT+qtUWrOK/LhTFlVSNP23euS8UBkE04B8WoyKKCmIRrQgiLlzURbtoFU1QtEIxtplzJgziT7VR7KK6qy5UtKSxutIu1IpoK1iNNnJmXurLefdl3s/Ma8B+EAjJnXPvd893zz3n3AGO438Cx3iSBD8S47Bj/EmCX0iw1wl2OMazQR231kZxOhYCaruwmOpYHQhut/9zjEedYGa+H2L8TYz3XQN3D05gSeUEVryKkwLBI8TY31qQ4Es7Rne8ExFDSm09XhvF0kpIBGM4LZLInIWE47g8Ps6N45o8RI4SEnwTMm6ohAwxXvcsYIP1WrgN56pk9PdVjDNI0KcydIznSPB5Bw+91HO5rWCc7QQHogkPOcHL/YLL8toJGZeSYJMT/JZC5lPdjK4sOi2yBA3cS4LNJDiv7BzqLfWSE/zlIbSPGri43ARNnKOadYJ1qADBOK50jEkfmcKe0ehBgk9ixioh07cNp5DgLZ/MCp0ZJxhOGKtjNSrAUBMnOsGoJ6C8mMsQCcgxjswxxJjQ6IOKMNQm87YlEzRwfXYrM1hEddzvBD9Hbv12YAtO7eWifX+vNbHMc2ftyy2x6LBvHWCE6BHCOi7SjQoZQ77/D9RxFTGmjcQew4KCel6wM7bApm6eHUaM541Xvj8muVkaHGNNItQyHkyMa+JMEhw0UeyudMOC+4rc0IUlZRcn2Kle8q6tfWHGSe9Ij99aO7R35QtiPJV2CLstqYjEQSWX9pFgDMuNR6Y1gU0MJMEtNgutWFJrOn1OywXzmZt9gzYY48MLQVLzHXpNOGHhGO+YQfdgAUgqDie4w3z2XVgQ4yGtAUiwnRif2UKpG9A5ikhqTlI5l8gUSmMdTiDGqiokZeqg+EYcQFm09Mo4QoxnMkrqA7OI31cyLskz5+AElpjIdbgMBw0MTxh5jKiH8kQplVneeQe7SSQYwwUk+MOTYjd9aYNKypayeSWVS1qtbJcxQow3tYhxdVyBFAR1XOsYv3rIfKxl69GBM1jkGB8WjVIZDvvexCBblXUKv0p0tq9lZLZnZQMXdiNKZQi/232D1id03wG6YF24R//7wzpu6pakZkGMF8w8G2Gh132RFCXqV32U2Pmk7ApLahbE+CpuUzcLKUV/+xAz9hDj6axJox5yPezzkikhKV/SqK0jb9KoIMYD2g1E8Qtyjuu7JSlvGs94D71EdMf8001J9W/FWVFHM1th1S3oJLHappSkvK0pxnfLmzgZeXbCCV4r0nxo3TWCN8pKKhRcbZsPTrA2swG9R4jxUxXtoDTU2u2gKZvxZm48hGPotw06fVmqskFX24XFtkZqrYlxXS5DvgiU1nvqyZMeJ99gslzSSWOjWOoYu2OG1vdk1XbeJpYlPNEmsTvXAU95VqiERKgH25yJiMTXvsZdLmhzLDXECjb3N3F+qQn+i47DnujUIlH2HpqXnGP8EAWBQ8R4pUiN30o79D3RXHYuJqfSnpgPJNjiSUM22QM7+xiq2tZd14a0puIaSGwC6IlOI4XPRBbofeJ7HlN9G7J9nTLilLxsKneILRkeH9ZUIdrBSTsmENyYi0Tb1tpj0mWPXpVuowbuzNQWTRZg05rFauDoqYzKQL+OEf9STev1izEZNQA3alF0LNKe40BF+Bf/jJJAAK/c1wAAAABJRU5ErkJggg==");
    parent.appendChild(child);
    
    child = document.createElement("hr");
    parent.appendChild(child);
    
    child = document.createElement("p");
    child.setAttribute("class", "heroHeading");
    child.innerHTML = "Order Confirmed";
    confirmWrapper.appendChild(child);
    
    child = document.createElement("p");
    child.setAttribute("class", "orderConfirmedPara");
    child.innerHTML = "Your order details has been sent to your E-mail. You can track your order with the link sent to you.";
    confirmWrapper.appendChild(child);

    // window.addEventListener("beforeunload", () => {
    //     sessionStorage.clear();
    // });

}

else {
    confirmPayment.style.display = "flex";
    confirmWrapper.style.display = "none";


    var valCount = 0;

    for (let key in JSON.parse(sessionStorage["passVal"])) {
        ++valCount;
    }

    var valTotal = 0;

    for (var i = 0; i < valCount; i++) {
        valTotal += parseInt(JSON.parse(sessionStorage["passVal"])[i]["price"]);
    }

    if (valTotal <= 1000) {
        valTotal += (5 / 100) * valTotal;
    }

    else {
        valTotal += (12 / 100) * valTotal;
    }

    sessionStorage["total"] = valTotal

    confirma.addEventListener("change", () => {
        if (confirma.value >= 80) {
            confirma.value = "100";

            let passVal = JSON.stringify(sessionStorage["passVal"]);
            let passData = JSON.stringify(sessionStorage["passData"]);
            let valTotal = JSON.stringify(sessionStorage["total"]);

            let finalOrder = passData + "|" + passVal + "|" + valTotal;

            function atou(b64) {
                return decodeURIComponent(escape(atob(b64)));
            }

            function utoa(data) {
                return btoa(unescape(encodeURIComponent(data)));
            }

            let b64string = utoa(finalOrder);

            fetch("https://lohit101.pythonanywhere.com/api/v0/payment/", {
            method: 'POST',
                body: b64string
            })
            .then(response => response.text())
            .then(response => {
                console.log(JSON.parse(response));
                var res = JSON.parse(response);

                sessionStorage["orderId"] = res["order_id"];

                var options = {
                    "key": "rzp_test_ikXFnXSaD0nIcn",
                    "amount": res["amount"],
                    "currency": "INR",
                    "name": "STRADA 1949 Clothing",
                    "description": "Payment Portal",
                    "image": "https://strada1949.studio/static/img/logo.png",
                    "order_id": res["rzp_order_id"],
                    "callback_url": "https://lohit101.pythonanywhere.com/api/v0/redirect-external",
                    "redirect": true,
                    "prefill": {
                        "name": res["name"],
                        "email": res["email"],
                        "contact": res["phone"]
                    },
                    "theme": {
                        "color": "#000000"
                    },
                    "send_sms_hash": true,
                    "allow_rotation": true,
                    "rety": {
                        "enabled": true
                    },
                    "notes": {
                        "passVal": passVal,
                        "passData": passData,
                        "valTotal": valTotal
                    }
                };
                var rzp1 = new Razorpay(options);
                rzp1.open();
            })
            .catch((err) => console.log(err));
        }

        else {
            confirma.value = "0";
        }
    });
}
