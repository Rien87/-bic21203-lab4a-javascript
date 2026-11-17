"use strict";

const generateBtn = document.getElementById("generateBtn");
const numberList  = document.getElementById("numberList");

function generateNumbers() {
  // Clear existing items so repeated clicks don't duplicate
  numberList.textContent = "";   // removes all child <li> safely

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `The number is ${i}`;
    numberList.appendChild(li);
  }
}

generateBtn.addEventListener("click", generateNumbers);