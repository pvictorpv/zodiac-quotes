let form = document.querySelector("form");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

/* Creates a label with for="month", text "Select your month of birth: " and appends to the form tag */

let labelMonthSelection = document.createElement("label");
labelMonthSelection.htmlFor = "month";
labelMonthSelection.innerHTML = "Select your month of birth: "
form.appendChild(labelMonthSelection);

/* Creates a select tag with the id="month" */

let monthSelection = document.createElement("select");
monthSelection.id = "month";
form.appendChild(monthSelection);

/* A for loop to generate a option list from the array "months" */

for (let i = 0; i < months.length; i++) {
  let option = document.createElement("option");
  option.text = months[i];
  monthSelection.appendChild(option);
}

/* Creates a button with the id="submitButton" and the text "Submit" */

let submitButton = document.createElement("button");
submitButton.id = "submitButton"
submitButton.innerHTML = "Submit"
form.appendChild(submitButton);

/* Adds a event listener to get the selected month by the user and saves at "selectedMonth" variable */

const submit = document.querySelector("#submitButton");
const monthList = document.querySelector("#month");

let selectedMonth;

submit.addEventListener('click', () => {
  event.preventDefault();
  selectedMonth = monthList.options[monthList.selectedIndex].text;
  alert(selectedMonth);
});


