"use strict";

const button = document.getElementById("encrypt");
button.addEventListener("pointerdown", () => {
  const input = document.getElementById("input").value;
  if (!validate(input)) return;

  const encryption = { a: "ai", e: "enter", i: "imes", o: "ober", u: "u" };
  const output = input.replace(/[aeiou]/g, (char) => encryption[char]);

  const outputElements = document.querySelector(".output-container");
  const copy = document.createElement("button");
  copy.classList.add("submit");
  copy.append("Copiar");
  const container = document.createElement("div");
  container.classList.add("output-text");
  container.append(output);
  container.classList.add("output");

  outputElements.replaceChildren(container, copy);
});

function validate(str) {
  if (!str) return false;
  for (let letter of str) {
    if ((letter >= "A" && letter < "a") || letter > "z") return false;
  }
  return true;
}
