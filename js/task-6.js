"use strict";

const inputNameRef = document.querySelector("#validation-input");

inputNameRef.addEventListener("focus", (e) => {
  inputNameRef.classList.remove("invalid", "valid");
});

inputNameRef.addEventListener("blur", (e) => {
  e.target.value.length >= e.target.getAttribute("data-length")
    ? inputNameRef.classList.add("valid")
    : inputNameRef.classList.add("invalid");
});
