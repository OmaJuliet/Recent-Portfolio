var Menu = document.getElementById("Menu");

Menu.style.maxHeight = "0px";

function menutoggle() {
    if (Menu.style.maxHeight == "0px") {
            Menu.style.maxHeight = "200px";
        }else{
            Menu.style.maxHeight = "0px";
        }
}



