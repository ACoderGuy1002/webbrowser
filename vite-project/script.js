

function goto(){
    console.log("HELLO");

    let inputTextValue = document.getElementById("url");

    inputTextValue = inputTextValue.value;

    window.open('https://www.duckduckgo.com/?t=h_&q=' + inputTextValue).focus;
}

const form = document.getElementById("form");

form.addEventListener("submit", goto);