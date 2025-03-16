function appendValue(value) {
    let display = document.getElementById("display");
    if (value === '%' && display.value !== '') {
        display.value = (parseFloat(display.value) / 100).toString();
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid Calculation");
    }
}
