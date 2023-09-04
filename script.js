const input_container = document.querySelector(".input-container");
const display_container = document.querySelector(".display_container");
const btn = document.querySelectorAll(".button");
const user_select = document.querySelector(".user_select");
const machine_select = document.querySelector(".machine_select");
const comp_score = document.querySelector(".compt_score_num");
const your_score = document.querySelector(".your_score_num");
const winnerMessage = document.querySelector(".winner_msg");
const playAgain = document.querySelector(".play_again");
const against_pc = document.querySelector(".against_pc");
const next_Button = document.querySelector(".next");
const ruleBtn = document.querySelector(".rules_btn");
const rules = document.querySelector(".rules");
const popup_close = document.querySelector(".popup_close");
const nextbtn = document.querySelector(".next");
const user_green = document.querySelector(".user_green");
const pc_green = document.querySelector(".pc_green");

let winnerText = "";
let score_for_user = 0;
let scoreFor_com = 0;
// localStorage

// Storing the user's score in local storage
const userScore = localStorage.getItem("userScore");
const computerScore = localStorage.getItem("computerScore");

if (userScore !== null && computerScore !== null) {
  score_for_user = parseInt(userScore, 10);
  scoreFor_com = parseInt(computerScore, 10);
  your_score.innerHTML = score_for_user;
  comp_score.innerHTML = scoreFor_com;
} else {
  // Initial values for local storage
  localStorage.setItem("userScore", score_for_user);
  localStorage.setItem("computerScore", scoreFor_com);
}

// localStorage.clear();

console.log("check");
let random = ["paper", "scissor", "rock"];
let userChoice;
let computerinput;

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * random.length);
  return random[randomIndex];
}

btn.forEach((buttons) => {
  buttons.addEventListener("click", function (e) {
    userChoice = buttons.getAttribute("data-choice");
    // console.log(userChoice);

    checkWinner();
  });
});

function checkWinner() {
  computerinput = computerChoice();
  console.log(`userChoice ${userChoice} computerinput ${computerinput}`);
  updateimg(user_select, userChoice);
  updateimg(machine_select, computerinput);
  // input_container.remove()

  if (userChoice === computerinput) {
    console.log("tie");
    renderResult();
    winnerText += "TIE UP";
    winnerMessage.innerHTML = winnerText;
    against_pc.innerHTML = "";
  } else if (
    (userChoice === "rock" && computerinput === "scissor") ||
    (userChoice === "paper" && computerinput === "rock") ||
    (userChoice === "scissor" && computerinput === "paper")
  ) {
    console.log("youwin");
    renderResult();
    update_user_score(+1);
    winnerText += "YOU WIN";
    winnerMessage.innerHTML = winnerText;
    against_pc.innerHTML = "AGAINST PC";
    nextButton();
    backgroundImage(user_select);
  
  } else {
    console.log("computerwin");
    renderResult();
    updatecomputerscore(+1);
    winnerText += "YOU LOST";
    winnerMessage.innerHTML = winnerText;
    against_pc.innerHTML = "AGAINST PC";
    backgroundImage(machine_select);
  }
  localStorage.setItem("userScore", score_for_user);
  localStorage.setItem("computerScore", scoreFor_com);
}

function backgroundImage(image) {
  
  image.style.backgroundImage = "url(images/Ellipse7.png)";
  image.style.backgroundSize = "cover"; 
  image.style.backgroundRepeat = "no-repeat"; 
  image.style.backgroundPosition = "center"; 
}
function clearBackgroundImage(image) {
  image.style.backgroundImage = "none";
  
}
playAgain.addEventListener("click", function () {
  input_container.classList.remove("remove");
  display_container.classList.remove("show");
  next_Button.classList.remove("show");
  clearBackgroundImage(user_select);
  clearBackgroundImage(machine_select);
});
function renderResult() {
  input_container.classList.toggle("remove");
  display_container.classList.toggle("show");
  winnerText = "";
}

function updateimg(select, choice) {
  select.classList.remove("paper");
  select.classList.remove("rock");
  select.classList.remove("scissor");

  const img = select.querySelector("img");
  select.classList.add(choice);
  img.src = `./images/${choice}.png`;
  img.alt = choice;
}


function updatecomputerscore(value) {
  scoreFor_com += value;
  comp_score.innerHTML = scoreFor_com;
}

function update_user_score(value) {
  score_for_user += value;
  your_score.innerHTML = score_for_user;
}

function nextButton() {
  next_Button.classList.toggle("show");
}

ruleBtn.addEventListener("click", function () {
  // console.log("che");
  rules.classList.toggle("show");
});

popup_close.addEventListener("click", function () {
  rules.classList.toggle("show");
});
const main = document.querySelector(".main");
const hurrymsg = document.querySelector(".hurry_page");
const playAgainn = document.querySelector(".playAgain");

nextbtn.addEventListener("click", function () {
  // console.log("he");
  main.classList.toggle("hide");
  hurrymsg.classList.toggle("show");
  next_Button.classList.remove("show");
});
// playAgainHurry
playAgainn.addEventListener("click", function () {
  main.classList.remove("hide");
  hurrymsg.classList.remove("show");
  input_container.classList.remove("remove");
  display_container.classList.remove("show");
  next_Button.classList.remove("show");
});

