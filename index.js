const userInputContainer = document.querySelector(".choices");
const displayContainer = document.querySelector(".selection");
const buttons = document.querySelectorAll(".button");
const userSelectElement = document.querySelector(".user_select");
const computerSelectElement = document.querySelector(".machine_select");
const computerScoreElement = document.querySelector(".comp_points");
const userScoreElement = document.querySelector(".user_points");
const winnerMessageElement = document.querySelector(".winner_msg");
const playAgainButton = document.querySelector(".play_again");
const againstPCElement = document.querySelector(".against_pc");
const nextButtonElement = document.querySelector(".next");
const rulesButton = document.querySelector(".rules_btn");
const rulesElement = document.querySelector(".rules");
const closeButton = document.querySelector(".close_x");
const nextButton = document.querySelector(".next");
const userGreenElement = document.querySelector(".user_green");
const pcGreenElement = document.querySelector(".pc_green");

let winnerText = "";
let userScore = 0;
let computerScore = 0;

function getRandomChoice() {
  const choices = ["paper", "scissor", "rock"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const userChoice = button.getAttribute("data-choice");
    playGame(userChoice); 
  });
});

function playGame(userChoice) {
  const computerChoice = getRandomChoice();
  updateSelection(userSelectElement, userChoice); 
  updateSelection(computerSelectElement, computerChoice);

  if (userChoice === computerChoice) {
    winnerText += "TIE UP";
    winnerMessageElement.innerHTML = winnerText;
    againstPCElement.innerHTML = "";
    showResult();
    againstPCElement.textContent = "";
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    winnerText += "YOU WIN";
    winnerMessageElement.innerHTML = winnerText;
    againstPCElement.innerHTML = "AGAINST PC";
    showResult();
    updateUserScore(1);
    againstPCElement.textContent = "AGAINST PC";
    showNextButton();
    setBackgroundImage(userSelectElement);
  } else {
    winnerText += "YOU LOST";
    winnerMessageElement.innerHTML = winnerText;
    againstPCElement.innerHTML = "AGAINST PC";
    showResult();
    updateComputerScore(1);
    againstPCElement.textContent = "AGAINST PC";
    setBackgroundImage(computerSelectElement);
  }

  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);
}

function setBackgroundImage(element) {
  element.style.backgroundImage = "url(images/Ellipse7.png)";
  element.style.backgroundSize = "cover";
  element.style.backgroundRepeat = "no-repeat";
  element.style.backgroundPosition = "center";
}

function clearBackgroundImage(element) {
  element.style.backgroundImage = "none";
}

playAgainButton.addEventListener("click", function () {
  userInputContainer.classList.remove("remove");
  displayContainer.classList.remove("show");
  nextButtonElement.classList.remove("show");
  clearBackgroundImage(userSelectElement);
  clearBackgroundImage(computerSelectElement);
});

function showResult() {
  userInputContainer.classList.toggle("remove");
  displayContainer.classList.toggle("show");
  winnerText = "";
}

function updateSelection(select, choice) {
  select.classList.remove("paper");
  select.classList.remove("rock");
  select.classList.remove("scissor");

  const img = select.querySelector("img");
  select.classList.add(choice);
  img.src = `./images/${choice}.png`;
  img.alt = choice;
}

function updateComputerScore(value) {
  computerScore += value;
  computerScoreElement.textContent = computerScore;
}

function updateUserScore(value) {
  userScore += value;
  userScoreElement.textContent = userScore;
}

function showNextButton() {
  nextButtonElement.classList.toggle("show");
}

rulesButton.addEventListener("click", function () {
  rulesElement.classList.toggle("show");
});

closeButton.addEventListener("click", function () {
  rulesElement.classList.toggle("show");
});

const mainElement = document.querySelector(".header");
const hurryMsgElement = document.querySelector(".hurry_page");
const playAgainBtn = document.querySelector(".playAgain");

nextButton.addEventListener("click", function () {
  mainElement.classList.toggle("hide");
  hurryMsgElement.classList.toggle("show");
  nextButtonElement.classList.remove("show");
});

playAgainBtn.addEventListener("click", function () {
  mainElement.classList.remove("hide");
  hurryMsgElement.classList.remove("show");
  userInputContainer.classList.remove("remove");
  displayContainer.classList.remove("show");
  nextButtonElement.classList.remove("show");
});
