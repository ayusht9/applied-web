const totalAmount = document.getElementById("total-amount");
const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const yearsInput = document.getElementById("years");

function calculate(e) {
    e.preventDefault();
    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    const result = principal * Math.pow((1 + rate / 1), 1 * years)

    totalAmount.textContent = `$${result.toFixed(2)}`
}

const calc = document.querySelector("#calc");
calc.addEventListener("click", calculate);

principalInput.addEventListener("click", clearInput);
rateInput.addEventListener("click", clearInput);
yearsInput.addEventListener("click", clearInput);

function clearInput(e) {
    e.target.value = "";
}