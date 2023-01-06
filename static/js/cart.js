var checkoutBtnn = document.getElementById("checkoutBtnn");

checkoutBtnn.addEventListener("click", () => {

    sessionStorage.removeItem("passVal");

    console.log(sessionStorage);

});