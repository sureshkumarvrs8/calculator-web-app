const display = document.getElementById("display");

function append(input) {
    display.value += input;

}

function clearDisplay() {
    display.value = "";
    
}

function calculate() {
    try {
        display.value = eval(display.value);

    } catch(exception) {
        display.value = "Error";
    }
}