function add(num){
    const display = document.getElementById("display");
    display.value += num;
}

function calculate(){
    const display = document.getElementById("display");
    const result = eval(display.value);
    document.getElementById("result").value = result;
    document.getElementById("display").value = "";
    document.getElementById("history").value+=diplay+"\n";
    document.getElementById("history").value+=result+"\n";
}

function reset(){
    const display = document.getElementById("display");
    document.getElementById("result").value = "";
}

function del(){
    const display = document.getElementById("display");
    display.value = display.value.substring(0,display.value.length-1);
}

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");
open.onclick = () => {
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};
