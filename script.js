let form = document.querySelector("form");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let monthForm = document.querySelector('#monthForm');

let dayForm = document.querySelector('#dayForm');

/* Creates a label with for="month", text "Select your month of birth: " and appends to the form tag */

let labelMonthSelection = document.createElement("label");
labelMonthSelection.htmlFor = "month";
labelMonthSelection.innerHTML = "Select your month of birth:"
monthForm.appendChild(labelMonthSelection);

/* Creates a select tag with the id="month" */

let monthSelection = document.createElement("select");
monthSelection.id = "month";
monthForm.appendChild(monthSelection);

/* A for loop to generate a option list from the array "months" */

for (let i = 0; i < months.length; i++) {
  let option = document.createElement("option");
  option.text = months[i];
  monthSelection.appendChild(option);
};

/* Creates a button with the id="submitMonthButton" and the text "Submit" */

let submitMonthButton = document.createElement("button");
submitMonthButton.id = "submitMonthButton"
submitMonthButton.innerHTML = "Submit"
monthForm.appendChild(submitMonthButton);

/* Adds a event listener to get the selected month by the user and saves at "selectedMonth" variable */

const monthSubmit = document.querySelector("#submitMonthButton");
const monthList = document.querySelector("#month");

let selectedMonth;

let selectedDay;

monthSubmit.addEventListener('click', () => {
  event.preventDefault();
  selectedMonth = monthList.options[monthList.selectedIndex].text;

  monthForm.classList.toggle('displayNone');

  let selectedMonthParagraph = document.createElement("p");
  selectedMonthParagraph.innerHTML = `Selected month: ${selectedMonth}`
  dayForm.appendChild(selectedMonthParagraph);

  /* Creates a label with for="day", text "Select your day of birth: " and appends to the form tag */

  let labelDaySelection = document.createElement("label");
  labelDaySelection.htmlFor = "day";
  labelDaySelection.innerHTML = "Select your day of birth:"
  dayForm.appendChild(labelDaySelection);

  /* Creates a select tag with the id="day" */

  let daySelection = document.createElement("select");
  daySelection.id = "day";
  dayForm.appendChild(daySelection);

  /* A for loop to generate a option list with equivalent days to the selected month */

  let monthDays = 31;

  if (selectedMonth == "April" 
    || selectedMonth == "June"
    || selectedMonth == "September"
    || selectedMonth == "November") {

      monthDays = 30;

  } else if (selectedMonth == "February") {

      monthDays = 29;
      
  };

  for (let i = 1; i <= monthDays; i++) {
    let option = document.createElement("option");
    option.text = i.toString();
    daySelection.appendChild(option);
  };

  let submitButton = document.createElement("button");
  submitButton.id = "submitButton"
  submitButton.innerHTML = "Generate Quote"
  dayForm.appendChild(submitButton);

  const submit = document.querySelector("#submitButton");
  const dayList = document.querySelector("#day");

  submit.addEventListener('click', () => {
    event.preventDefault();
    selectedDay = dayList.options[dayList.selectedIndex].text;
  
    dayForm.classList.toggle('displayNone');

  });

});

/* Signs Quotes */

let aquarius = [];

let pisces = [];

let aries = [];

let taurus = [];

let gemini = [];

let cancer = [];

let leo = [];

let virgo = [];

let libra = [];

let scorpio = [];

let sagittarius = [];

let capricorn = [];
