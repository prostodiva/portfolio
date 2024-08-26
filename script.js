document.addEventListener("DOMContentLoaded", function() {

    //let's connect element
    const letsConnectElement = document.getElementById("letsConnect");
    letsConnectElement.addEventListener("mouseover", 
        (event) => {
            event.target.style.backgroundColor= "rgb(97, 213, 91)";
            event.target.style.font="italic bold 20px Verdana, sans-serif";
        });
    //color reset
    letsConnectElement.addEventListener("mouseout", 
        (event)  => {
            event.target.style.backgroundColor ="";
            event.target.style.font="";
        });   

    //changing color of the bottom-header element
    const bottomHeader = document.getElementById("bottom-header");
    bottomHeader.addEventListener("mouseover", 
        (event) => {
            event.target.style.backgroundColor="rgb(97, 213, 91)";
            event.target.style.font="italic bold 20px Verdana, sans-serif";
        });
    bottomHeader.addEventListener("mouseout",
        (event) => {
            event.target.style.backgroundColor="";
            event.target.style.font="";
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



