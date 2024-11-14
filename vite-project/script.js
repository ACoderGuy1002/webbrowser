

function goto(){
    console.log("HELLO");

    let inputTextValue = document.getElementById("url");

    inputTextValue = inputTextValue.value;
    var strUsr = drop.options[drop.selectedIndex].value;

    if (strUsr == "duck"){
        window.open('https://www.duckduckgo.com/?t=h_&q=' + inputTextValue).focus;
    }
    else if (strUsr == "google"){
        window.open('https://www.google.com/search?q=' + inputTextValue).focus;
    }
    else {
        window.open('https://www.bing.com/search?q=' + inputTextValue).focus;
    }

}

const form = document.getElementById("form");
const drop = document.getElementById("engine")

form.addEventListener("submit", goto);
