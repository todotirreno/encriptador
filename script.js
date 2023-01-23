"use strict";

const encryptButton = document.getElementById("encrypt");
const decryptButton = document.getElementById("decrypt");

encryptButton.addEventListener("pointerdown", encrypt);
decryptButton.addEventListener("pointerdown", decrypt);

function encrypt() {
  const input = document.getElementById("input").value;
  if (!validate(input)) return;

  const encryption = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
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

  copy.addEventListener("pointerdown", copyF);
}

function validate(str) {
  if (!str) return false;
  for (let letter of str) {
    if ((letter >= "A" && letter < "a") || letter > "z") return false;
  }
  return true;
}

function decrypt() {
  const input = document.getElementById("input").value;
  if (!validate(input)) return;

  const encryption = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };
  const output = input.replace(
    /(ai)|(enter)|(imes)|(ober)|(ufat)/g,
    (group) => encryption[group]
  );

  const outputElements = document.querySelector(".output-container");
  const copy = document.createElement("button");
  copy.classList.add("submit");
  copy.append("Copiar");
  const container = document.createElement("div");
  container.classList.add("output-text");
  container.append(output);
  container.classList.add("output");

  outputElements.replaceChildren(container, copy);
  copy.addEventListener("pointerdown", copyF);
}

function copyF() {
  const text = document.querySelector(".output-text").textContent;
  navigator.clipboard.writeText(text);
}
