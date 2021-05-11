
const returned = document.getElementById("return");
var numberInput = document.getElementById('numberF');
returned.addEventListener('click', (e) => {
    const number = parseInt(numberInput.value);
    document.getElementById("returnm").innerHTML = "Output: " + fibonacci(number);
    numberInput.value = "";
    e.preventDefault();
});


function fibonacci(num) {
    var num1 = 0;
    var num2 = 1;
    var sum;
    var out = [];
    var i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        out[i] = num2;
    }
    return out;
}