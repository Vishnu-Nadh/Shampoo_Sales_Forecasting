console.log("this thing is connected");

// const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector(".input-form");

const fromYear = document.getElementById("year-from");
const fromMonth = document.getElementById("month-from");
const toYear = document.getElementById("year-to");
const toMonth = document.getElementById("month-to");

const errorBox = document.getElementById("error-box");

const resultLoader = document.querySelector(".result-loader");
const downloadLink = document.querySelector(".download-result");

function validateDatetime(fromYr, toYr, fromMth, toMth) {
  if (Number(toYr) < Number(fromYr)) {
    return false;
  } else if (
    Number(toYr) === Number(fromYr) &&
    Number(toMth) < Number(fromMth)
  ) {
    return false;
  } else {
    return true;
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
      return true;
    }
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateInputs()) {
    const data = {
      fromYr: Number(fromYear.value.trim()),
      fromMth: Number(fromMonth.value.trim()),
      toYr: Number(toYear.value.trim()),
      toMth: Number(toMonth.value.trim()),
    };
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/predict_sales", true);
    xhr.setRequestHeader("content-type", "application/json");
    resultLoader.style.display = "flex";
    downloadLink.style.display = "none";
    xhr.onload = function () {
      console.log("form has submitted");
      console.log(this.responseText);

      resultLoader.style.display = "none";
      downloadLink.style.display = "flex";
    };
    xhr.send(JSON.stringify(data));
  }
});
