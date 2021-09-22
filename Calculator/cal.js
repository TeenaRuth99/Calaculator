function dis(val) {
    document.getElementById("res").value += val
}

//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("res").value
    let y = eval(x)
    document.getElementById("res").value = y
}

//function that clear the display
function clr() {
    document.getElementById("res").value = ""
}