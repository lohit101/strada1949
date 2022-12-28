exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),
    };
};

//     import data from './static/js/input.json' assert { type : 'json' };
        //     console.log(data);

        //     var count = 0;

        //     for (let key in data) {
        //         ++count;
        //     }

        //     console.log('Database Entries: ', count);

        //     for (var i = 0; i <= count - 1; i++) {
        //         var productHolderWrapper = document.getElementById("productHolderWrapper");

        //         var elemDiv = document.createElement("div");
        //         elemDiv.setAttribute("class", "productHolder");
        //         productHolderWrapper.appendChild(elemDiv);
        //     }

        //     var elemDivList = document.querySelectorAll(".productHolder");

        //     for (var i = 0; i < elemDivList.length; i++) {
        //         var elemDiv = elemDivList[i];

        //         var elemP = document.createElement("img");
        //         elemP.setAttribute("src", data[i]["img"]);
        //         elemP.setAttribute("class", "productImg");
        //         elemP.setAttribute("loading", "lazy");
        //         elemP.setAttribute("alt", "Product Image");
        //         elemDiv.appendChild(elemP);
        //     }

        //     for (var i = 0; i < elemDivList.length; i++) {
        //         var elemDiv = elemDivList[i];

        //         var elemP = document.createElement("p");
        //         elemP.appendChild(document.createTextNode(data[i]["name"]));
        //         elemP.setAttribute("class", "productName");
        //         elemP.setAttribute("id", "productName");
        //         elemDiv.appendChild(elemP);
        //     }

        //     for (var i = 0; i < elemDivList.length; i++) {
        //         var elemDiv = elemDivList[i];

        //         var elemP = document.createElement("p");
        //         elemP.appendChild(document.createTextNode(data[i]["displayPrice"]));
        //         elemP.setAttribute("class", "productDisplayPrice");
        //         elemP.setAttribute("id", "productDisplayPrice");
        //         elemDiv.appendChild(elemP);
        //     }