import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";


window.onload = function() {
  //write your code here
  const card = document.querySelector('.card');
  const suit = generateRandomSuit();
  card.classList.add(suit);
  card.innerHTML = generateRandomNumber();
  setTimeout(() => {
    card.classList.remove(suit);
    card.innerHTML = '';
  }, 1000);
};


let generateRandomNumber = () => {
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};