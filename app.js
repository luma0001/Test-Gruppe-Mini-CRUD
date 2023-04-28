"use strict";

window.addEventListener("load", initApp);

let hairdresserSelector = 0;
let statusIsAdimin = true;

function initApp() {
  document
    .querySelector("#hairdresser-selected")
    .addEventListener("change", modeSelected);

  document
    .querySelector("#admin-selector")
    .addEventListener("click", changeAdminStatus);
}

function changeAdminStatus() {
  if (statusIsAdimin == true) {
    statusIsAdimin = false;
    document.querySelector("#admin-selector").textContent = "Change to admin";
  } else {
    statusIsAdimin = true;
    document.querySelector("#admin-selector").textContent =
      "Change to customer";
  }
}

function modeSelected() {
  const selectedMode = this.value;
  changeOfMode(selectedMode);
  setDOM();
}

function changeOfMode(selected) {
  if (selected == "1") {
    hairdresserSelector = 1;
  } else if (selected == "2") {
    hairdresserSelector = 2;
  } else if (selected == "3") {
    hairdresserSelector = 3;
  } else if (selected == "4") {
    hairdresserSelector = 4;
  }
  console.log(hairdresserSelector);
}

function setDOM() {
  let htmlDOM;
  if (hairdresserSelector == 1) {
    htmlDOM = `<select id="hairdresser1">
     <option>Hey</option>
     <option>Jude</option>
     </select>`;
  } else if (hairdresserSelector == 2) {
    htmlDOM = `<select id="hairdresser2">
     <option>Yellow</option>
     <option>Submarine</option>
     </select>`;
  }
  document.querySelector("#forms-div").insertAdjacentHTML("beforeend", htmlDOM);
}
