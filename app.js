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
  document.querySelector("#forms-div").innerHTML = "";
  if (hairdresserSelector == 1) {
    htmlDOM = `<select id="hairdresser1">
     <option>Dreadlocks</option>
     <option>Cornrows</option>
     <option>Hippie hår</option>
     </select>`;
  } else if (hairdresserSelector == 2) {
    htmlDOM = `<select id="hairdresser2">
     <option>Page hår</option>
     <option>Krøller</option>
     <option>Gammeldags</option>
     </select>`;
  } else if (hairdresserSelector == 3) {
    htmlDOM = `<select id="hairdresser3">
     <option>Smørhår</option>
     <option>Noget dyrt</option>
     <option>Spytslikkeren</option>
     </select>`;
  } else if (hairdresserSelector == 4) {
    htmlDOM = `<select id="hairdresser4">
     <option>Karseklip</option>
     <option>Military cut</option>
     <option>Nup det hele</option>
     </select>`;
  }

  const formHTML =
    /*html*/
    `<article class="order-form">
   <div>${htmlDOM}</div>
   <lable for="full-name">Navn</lable>
   <input type="text" id="full-name" name="full-name">
   <lable for="user-phone">Tlf. Nummer</lable>
   <input type="text" id="user-phone" name="user-phone">
   </article>`;

  document
    .querySelector("#forms-div")
    .insertAdjacentHTML("beforeend", formHTML);
}
