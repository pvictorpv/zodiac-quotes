// BUILDING BLOCKS

const form = document.querySelector("fieldset");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function createAndAppendMonthSelector() {

const monthSelection = document.createElement("select");
monthSelection.id = "month";
form.appendChild(monthSelection);

const monthOption = document.createElement("option");
monthOption.id = "monthLabel"
monthOption.text = "Month";
monthSelection.appendChild(monthOption);

for (let i = 0; i < months.length; i++) {
  let option = document.createElement("option");
  option.text = months[i];
  monthSelection.appendChild(option);
};

};

let daySelection;

function createAndAppendDaySelector() {

daySelection = document.createElement("select");
daySelection.id = "day";
form.appendChild(daySelection);

let dayOption = document.createElement("option");
dayOption.text = "Day";
daySelection.appendChild(dayOption);

};

function createAndAppendGenerateQuoteButton() {

let generateButton = document.createElement("button");
generateButton.id = "generateButton"
generateButton.innerHTML = "Generate your quote"
form.appendChild(generateButton);

};

function removeAllOptions(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// EXECUTION

createAndAppendMonthSelector();

createAndAppendDaySelector();

createAndAppendGenerateQuoteButton();

// EVENT LISTENERS

const monthList = document.querySelector("#month");

let dayList = document.querySelector('#day');

let monthDays;

let selectedMonth;

let selectedDay;

monthList.addEventListener('change', () => {
  
  selectedMonth = monthList.options[monthList.selectedIndex].text;
  
  if (selectedMonth == "April" 
    || selectedMonth == "June"
    || selectedMonth == "September"
    || selectedMonth == "November") {

      monthDays = 30;

  } else if (selectedMonth == "February") {

      monthDays = 29;
    
  } else {
    
    monthDays = 31;
    
  }
  
  removeAllOptions(dayList);
  
  for (let i = 1; i <= monthDays; i++) {
    let option = document.createElement("option");
    option.text = i.toString();
    daySelection.appendChild(option);
  };
  
});

const generateQuote = document.querySelector("#generateButton");

generateQuote.addEventListener('click', () => {
  event.preventDefault();

  if (selectedMonth == undefined 
  || selectedMonth == "Month" ) {
    return alert("Choose a valid month!");
  };

  selectedDay = dayList.options[dayList.selectedIndex].text;
  alert(selectedMonth);
  alert(selectedDay);

  form.classList.toggle('displayNone');
});
