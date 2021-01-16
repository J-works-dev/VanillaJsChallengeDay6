// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");
const USER_LS = "country";

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = select.value;
  localStorage.setItem(USER_LS, currentValue);
  select.querySelector("option").removeAttribute("selected");
  select
    .querySelector(`option[value=${currentValue}]`)
    .setAttribute("selected", true);
}

function init() {
  const selectedCountry = localStorage.getItem(USER_LS);
  if (selectedCountry === null) {
    select.addEventListener("change", handleSubmit);
  } else {
    select
      .querySelector(`option[value=${selectedCountry}]`)
      .setAttribute("selected", true);
    select.addEventListener("change", handleSubmit);
  }
}

init();
