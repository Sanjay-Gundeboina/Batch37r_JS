let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("startbtn");
const decrementBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("resetbtn");

function updateDisplay() {
    counterDisplay.textContent = count < 10 ? "0" + count : count;
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
