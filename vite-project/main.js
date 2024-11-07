import {} from './empty.js';


function goto(){
    let inputTextValue = document.getElementById("url")

    inputTextValue = inputTextValue.value;

    window.open('https://www.duckduckgo.com/?t=lm&q=' + inputTextValue).focus;
}
