// const input = document.getElementById('name')
// const inputOne = document.querySelector('#name')


// let input = function()

// const getInput =
// console.log(input.value);
// console.log(inputOne);

const myForm = document.querySelector('.form');

myForm.addEventListener('submit', function(e) {

    e.preventDefault();

    const inputName = document.querySelector('#name').value;
    const inputEmail = document.querySelector('#email').value;
    const inputMsg = document.querySelector('#message').value;

    const namePara = document.querySelector('.namePara');
    const emailPara = document.querySelector('.emailPara');
    const msgPara = document.querySelector('.msgPara');

    localStorage.setItem('name', inputName);
    localStorage.setItem('email', inputEmail);
    localStorage.setItem('message', inputMsg);

    console.log(inputName, inputEmail, inputMsg);


    namePara.textContent = `${localStorage.getItem('name')}`;
    emailPara.textContent = `${localStorage.getItem('email')}`;
    msgPara.textContent = `${localStorage.getItem('message')}`;

    // namePara.innerHTML = `${localStorage.getItem('name')}`;
    // emailPara.innerHTML = `${localStorage.getItem('email')}`;
    // msgPara.innerHTML = `${localStorage.getItem('message')}`;

});

// playing with age

let myName = "Taofeek Ajibade";
let myAge = 40;

const calculatedAge = document.querySelector('.ageCalculator')

let heading = document.createElement('h1');
heading.innerHTML = "First Javascript created without assist!"

let newName = document.createElement('p');
newName.textContent = `My name is, ${myName}`;

let newAge = document.createElement('p');

newAge.textContent = `In 30 years, I will be ${myAge + 45} years old. Do wish me along life. Thank you`;


calculatedAge.appendChild(heading);
calculatedAge.appendChild(newName);
calculatedAge.appendChild(newAge);



// playing with variables

let mySchool = "Osogbo Senior High School";
let myTown = "Kuta, Ile-Ogbo LGA, Osun";

schoolAttended.innerHTML = `I graduated from ${mySchool} in 1999.`;


// working with canvas

// let x = 50;
// let y = 50;
// x = 50;
// y = 50;
// ctx.fillStyle = 'green';
// ctx.fillRect(10, 10, x, y);

// furthr play with booleans

const btn = document.querySelector('.myButton');
const msg = document.querySelector('.mchntext');

btn.addEventListener('click', updateBtn);
function updateBtn() {
    if (btn.textContent === 'Start Machine') {
        btn.textContent = 'Stop Machine';
        msg.textContent = 'The machine has started!';
    } else {
        btn.textContent = 'Start Machine';
        msg.textContent = 'The machine is stopped.';
    }
}

// const darkMode = document.querySelector('modeBtn');
// darkMode.addEventListener('click', updateMode);

// function updateMode() {
//     if (body.style.white)
// }

const fruits = ["apple", "pears", "watermelon", "mango", ["carrot", "cabbage", "tomatoes"]];
console.log(fruits);
console.log(fruits[4][2]);
const fruitscopy = fruits.slice();
console.log(fruitscopy);
const checkFruits = fruits.indexOf('pears');
const arrangeA = fruits.sort();

if (fruits.indexOf('pears') === 2) {
    console.log("There is no fruit.")
}

// const hasApple = fruits.includes('yam')
// console.log(hasApple);

// const mango = fruits[0];
// const dee = fruits[1];
// console.log(mango);

// const [a, , d] = ["apple", "pears", "watermelon", "mango"];

// const myHouse = ["bedroom", "store", "visitor", "verandah", ["carrot", "cabbage", "tomatoes"]];

// const newHouse = ('sandals', myHouse.length - 1, myHouse.length)



let newerAge = 56;
let decadeYear = `I will be ${newerAge + 20} in 20 years time.`;
console.log(decadeYear);

let browserType = "ClearGoal";
browserType = browserType.replace('Clear', 'Unique');

console.log(browserType);


// selecting strings


const sallah = document.querySelector('.greetings');

sallah.textContent = ' ';

let allGreetings = ['Happ Birthday!', 'Happy Sallah!', 'Merry Christmas!', 'Happy Sallah to all Muslims.', 'Merry Christmas to all Christians.', 'This is a gift for the Sallah.', 'We wish you all many years of Sallah in sound health.', 'We appreciate your coming to celebrate Sallah with us.'];
for (let i = 0; i < allGreetings.length; i++) {
    let input = allGreetings[i];
    if (allGreetings[i].indexOf('allah') !== -1) {
        let result = input;
        let sallahItem = document.createElement('li');
        sallahItem.textContent = result;
        sallah.appendChild(sallahItem);
    }
}

// name capitalization

const UKcity = document.querySelector('.ukcities');

UKcity.innerHTML = ' ';

let cityList = ['londON', 'MancHeSTer', 'BirmingHAM', 'liVERpooL'];

for (i=0; i < cityList.length; i++) {
    let cityLower = cityList[i].toLowerCase();
    let cityFirst = cityLower.slice(0,1);
    let capitalizer = cityLower.replace(cityFirst, cityFirst.toUpperCase());
    let newList = document.createElement('li');
    newList.innerHTML = capitalizer;
    UKcity.appendChild(newList);
    
    console.log(capitalizer);

}

const newCity = document.querySelector('.cities');

newCity.innerHTML = ' ';

let oldCity = ['ibaDAN', 'OsogBO', 'modaKEKE', 'kuTa', 'gBoNGAn'];
for (let i =0; i < oldCity.length; i++) {
    let inputLower = oldCity[i].toLowerCase();
    let firstLetter = inputLower.slice(0,1);
    let capitalized = inputLower.replace(firstLetter, firstLetter.toUpperCase());
    let listItem = document.createElement('li');
    listItem.innerHTML = capitalized;
    newCity.appendChild(listItem);



    console.log(capitalized);
}


const mathsScore = document.getElementById('maths');

mathsScore.innerHTML = ' ';

let examScore = 55;
let examHighestScore = 70;
let examReport = `You scored ${examScore}/${examHighestScore} (${Math.round(examScore/examHighestScore*100)}%). ${examScore >= 49 ? 'Congratulations! You passed!' : 'Oh! Trust you would do better next time.'}`;

let examRecord = document.createElement('p');
examRecord.innerHTML = examReport;
mathsScore.appendChild(examRecord);

console.log(examRecord);


const section = document.querySelector('.cities');

section.innerHTML = ' ';

let quoteStart = 'Don\'t judge each day by the harvest you reap. ';
let quoteEnd = 'Only God knows what tomorrow may hold for all.';
let finalQuote = quoteStart + quoteEnd;

let lineOne = document.createElement('p');
lineOne.innerHTML = finalQuote;

section.appendChild(lineOne);

console.log(lineOne);


// slicing...

let quoteLenght = finalQuote.length;
let index = finalQuote.indexOf('Only');

let revisedQuote = finalQuote.slice(0,45);
console.log(revisedQuote)

let revisedLine = document.createElement('p');
revisedLine.textContent = revisedQuote;
section.appendChild(revisedLine);

// capitalization ...

let fixedQuote = `"${finalQuote.toLowerCase()}"`;
console.log(fixedQuote);

const splitWord = fixedQuote.split('');
for (i = 0; i < splitWord.length; i++) {
    splitWord[i] = splitWord[i][0].toUpperCase();
}
splitWord.join('');

console.log(splitWord)




// Search Words

const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
