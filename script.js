console.log("this thing is connected");

// const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector(".input-form");

const fromYear = document.getElementById("year-from");
const fromMonth = document.getElementById("month-from");
const toYear = document.getElementById("year-to");
const toMonth = document.getElementById("month-to");

const errorBox = document.getElementById("error-box");

function validateDatetime(fromYr, toYr, fromMth, toMth) {
  if (Number(toYr) >= Number(fromYr) && Number(toMth) >= Number(fromMth)) {
    return true;
  } else {
    return false;
  }
}

function validateInputs() {
  const fromYr = fromYear.value.trim();
  const toYr = toYear.value.trim();
  const fromMth = fromMonth.value.trim();
  const toMth = toMonth.value.trim();
  if (fromYr === "" || toYr === "" || fromMth === "" || toMth === "") {
    errorBox.style.display = "flex";
    errorBox.innerText = "Empty input feild found! Please fill all inputs";
  } else {
    errorBox.style.display = "none";
    errorBox.innerText = "";
    if (!validateDatetime(fromYr, toYr, fromMth, toMth)) {
      errorBox.style.display = "flex";
      errorBox.innerText =
        "Start date must be before End date! Choose correct date";
    } else {
      errorBox.style.display = "none";
      errorBox.innerText = "";
    }
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});
