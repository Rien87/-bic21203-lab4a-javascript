"use strict";

const inputEl  = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

function checkInput() {
  const raw = inputEl.value.trim();          // handle empty / whitespace

  if (raw === "") {
    resultEl.textContent = "Please enter a valid number!";
    return;
  }

  // Number() converts "10.5" -> 10.5, "abc" -> NaN, "5" -> 5
  const num = Number(raw);

  if (Number.isNaN(num)) {
    resultEl.textContent = "Please enter a valid number!";
  } else if (num < 10) {
    resultEl.textContent = "The number is lower than 10";
  } else if (num > 10) {
    resultEl.textContent = "The number is higher than 10";
  } else {
    resultEl.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);