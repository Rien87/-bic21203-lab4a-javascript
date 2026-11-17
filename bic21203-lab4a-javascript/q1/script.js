"use strict";

// 1) Select the paragraph and button using DOM selection methods
const messageEl = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// 2) Define the function that replaces the paragraph text
function changeMessage() {
  messageEl.textContent = "Hello there!";
}

// 3) Attach the function to the button with addEventListener
changeBtn.addEventListener("click", changeMessage);
