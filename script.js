document.addEventListener("DOMContentLoaded", function() {

    //let's connect element
    const letsConnectElement = document.getElementById("letsConnect");
    letsConnectElement.addEventListener("mouseover", 
        (event) => {
            event.target.style.backgroundColor= "green";
        });
    //color reset
    letsConnectElement.addEventListener("mouseout", 
        (event)  => {
            event.target.style.backgroundColor ="";
        });   

    //changing color of the bottom-header element
    const bottomHeader = document.getElementById("bottom-header");
    bottomHeader.addEventListener("mouseover", 
        (event) => {
            event.target.style.backgroundColor="green";
        });
    bottomHeader.addEventListener("mouseout",
        (event) => {
            event.target.style.backgroundColor="";
        });

    //nav menu
    const mainNavMenuElement = document.getElementById("main-menu");
    mainNavMenuElement.addEventListener("mouseover", 
        (event) => {
            event.target.style.font = "italic bold 25px Verdana, sans-serif";
        });
    mainNavMenuElement.addEventListener("mouseout",
        (event) => {
            event.target.style.font = "";
        });

});



