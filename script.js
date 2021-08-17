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
  option.value = i + 1;
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

function changeBackgroungImage(sign) {
    let localPath = 'url(img/' + sign[5] + '.png)';
    document.querySelector('#quoteDiv').style.backgroundImage = localPath;
}

let quote;

function createAndAppendQuote(sign) {
  quote = sign[Math.floor(Math.random()*5)];
  signName = sign[5];
  let h1 = document.querySelector('#signName');
  h1.innerHTML = signName;
  let h2 = document.querySelector('h2');
  h2.innerHTML = quote;
};

function getZodiac(selectedMonth, selectedDay) {
	let datecode = Number(selectedMonth)*100 + Number(selectedDay); //this will give us a number represent month and day
  if (datecode <= 120){        // Jan 20
    changeBackgroungImage(capricorn)
		createAndAppendQuote(capricorn);
	}else if (datecode <= 219) { // Feb 19
		changeBackgroungImage(aquarius)
		createAndAppendQuote(aquarius);
	}else if (datecode <= 320) { // Mar 20
		changeBackgroungImage(pisces)
		createAndAppendQuote(pisces);
	}else if (datecode <= 420) { // Apr 20
		changeBackgroungImage(aries)
		createAndAppendQuote(aries);
	}else if (datecode <= 520) { // May 20
		changeBackgroungImage(taurus)
		createAndAppendQuote(taurus);
	}else if (datecode <= 621) { // Jun 21
		changeBackgroungImage(gemini)
		createAndAppendQuote(gemini);
	}else if (datecode <= 722) { // Jul 22
		changeBackgroungImage(cancer)
		createAndAppendQuote(cancer);
	}else if (datecode <= 822) { // Aug 22 
		changeBackgroungImage(leo)
		createAndAppendQuote(leo);
	}else if (datecode <= 921) { // Sept 21
		changeBackgroungImage(virgo)
		createAndAppendQuote(virgo);
	}else if (datecode <= 1022) { // Oct 22
		changeBackgroungImage(libra)
		createAndAppendQuote(libra);
	}else if (datecode <= 1121) { // Nov 21
		changeBackgroungImage(scorpio)
		createAndAppendQuote(scorpio);
	}else if (datecode <= 1221) { // Dec 21
		changeBackgroungImage(sagittarius)
		createAndAppendQuote(sagittarius);
	}else{ //if we hit this case it means we hava greater date code than Dec 21
		changeBackgroungImage(capricorn)
		createAndAppendQuote(capricorn);
	}
};

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
  
  selectedMonth = monthList.options[monthList.selectedIndex].value;
  
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
    option.value = i;
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

  selectedDay = dayList.options[dayList.selectedIndex].value;
  
  getZodiac(selectedMonth, selectedDay);

  let mainDiv = document.querySelector('#main');
  mainDiv.classList.toggle('displayNone');
  
  let resultPage = document.querySelector('#resultPage');
  resultPage.classList.remove('displayNone');
  resultPage.classList.toggle('displayFlex');

});

/* Signs Quotes */

let aquarius = [
  "Just be yourself. Let people see the real, imperfect, flawed, quirky, weird, beautiful, magical person that you are.",
  "Lift up your hearts. Each new hour holds new chances. For new beginnings.",
  "I am my own muse.",
  "You can be the lead in your own life.",
  "It is only in our darkest hours that we may discover the true strength of the brilliant light within ourselves that can never, ever, be dimmed.",
  "aquarius",
];

let pisces = [
  "Life will only change when you become more committed to your dreams than you are to your comfort zone.",
  "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
  "The true intelligence is not knowledge but imagination.",
  "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.",
  "Don’t wait. The time will never be just right.",
  "pisces",
];

let aries = [
  "Once you become fearless, life becomes limitless.",
  "You cannot just sit there and wait for people to give you that golden dream. You have to go out there and make it happen.",
  "Say yes and you'll figure it out afterward.",
  "The challenge is not to be perfect…it’s to be whole.",
  "Once you choose hope, anything’s possible.",
  "aries",
];

let taurus = [
  "Right now, everything may seem overwhelming and impossible, but take a deep breath and know that you will get through this.",
  "Success to me is having ten honeydew melons and eating only the top half of each slice.",
  "The grass is greener where you water it.",
  "I’m always perpetually out of my comfort zone.",
  "The best way to predict the future is to create it.",
  "taurus",
];

let gemini = [
  "Nothing great was ever achieved without enthusiasm.",
  "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
  "Let's do what we love and do a lot of it.",
  "When I believe in something, I’m like a dog with a bone.",
  "The dreamers are the saviors of the world.",
  "gemini",
];

let cancer = [
  "You carry so much love in your heart. Give some. To yourself.",
  "I can do things you cannot. You can do things I cannot. Together we can do great things.",
  "Doubt kills more dreams than failure ever will",
  "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
  "People are often unreasonable, irrational, and self-centered. Forgive them anyway. If you are kind, people may accuse you of selfish, ulterior motives. Be kind anyway.",
  "cancer",
];

let leo = [
  "Nothing can dim the light which shines from within.",
  "Only when you can be extremely pliable and soft can you be extremely hard and strong.",
  "Be so good they can't ignore you.",
  "There’s nothing wrong with being afraid. It’s not the absence of fear, it’s overcoming it and sometimes you just have to blast through and have faith.",
  "I will always find a way and a way will always find me.",
  "leo",
];

let virgo = [
  "She was a savage, a fucking brute unafraid to fight for what she wanted. Brave enough to go to war for what she deserved.",
  "Most people spend more time and energy going around problems than in trying to solve them.",
  "Never stop believing that fighting for what's right is worth it.",
  "You can waste your lives drawing lines. Or you can live your life crossing them.",
  "Nothing is impossible, the word itself says ‘I’m possible’!",
  "virgo",
];

let libra = [
  "Do the universe a favor, don't hide your magic.",
  "If the human race wishes to have a prolonged and indefinite period of material prosperity, they have only got to behave in a peaceful and helpful way toward one another.",
  "Generosity is the best investment.",
  "When I’m tired, I rest. I say, ‘I can’t be a superwoman today.",
  "Optimist: Someone who figures that taking a step backward after taking a step forward is not a disaster, it’s a cha-cha.",
  "libra",
];

let scorpio = [
  "Sometimes you have to give yourself pep talks. Like, 'hello. You're a badass woman, don't be sad, you got this and I love you.'",
  "If you shift your focus from yourself to others, extend your concern to others, and cultivate the thought of caring for the well-being of others, then this will have the immediate effect of opening up your life and helping you to reach out.",
  "Pour yourself a drink, invest on you some money, and pull yourself together",
  "We need to reshape our own perception of how we view ourselves. We have to step up as women and take the lead.",
  "It is better to be hated for what you are than to be loved for what you are not.",
  "scorpio",
];

let sagittarius = [
  "The best is yet to come! Believe it!",
  "The world is full of magic things, patiently waiting for our senses to grow sharper.",
  "I tramp a perpetual journey.",
  "When I’m hungry, I eat. When I’m thirsty, I drink. When I feel like saying something, I say it.",
  "Believe you can and you’re halfway there.",
  "sagittarius",
];

let capricorn = [
  "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
  "There are some things so serious, you have to laugh at them.",
  "They say good things come to those who wait, so imma be at least an hour late.",
  "I think the best role models for women are people who are fruitfully and confidently themselves, who bring light into the world.",
  "I believe that one defines oneself by reinvention. To not be like your parents. To not be like your friends. To be yourself. To cut yourself out of stone.",
  "capricorn",
];