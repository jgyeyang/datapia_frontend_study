const display = document.getElementById("display");
const resultDisplay = document.getElementById("result")
const history = document.getElementById("history")
function add(num){
    display.value += num;
}

function calculate(){    
    const result = eval(display.value);
    resultDisplay.value = result;
    history.value+=display.value+"\n";
    history.value+=result+"\n";
    display.value = "";
}

function reset(){    
    resultDisplay.value = "";
}

function del(){
    display.value = display.value.substring(0,display.value.length-1);
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.addEventListener('click',() => {
    modal.style.display = "flex";
})
close.addEventListener('click',() => {
    modal.style.display = "none";
})
