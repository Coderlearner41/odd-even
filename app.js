const area = document.querySelector("#area");
const msg = document.querySelector(".msg");
const container = document.querySelector(".msg-container");
const form = document.querySelector("form");
const button = document.querySelector(".submit");
const odd = document.querySelector(".odd");
const even = document.querySelector(".even");
let prefrence;
button.disabled = true;

button.addEventListener("click",()=>{
  event.preventDefault();
  const inputValue = area.value;
  const parsedValue = parseInt(inputValue);
  playGame(parsedValue, prefrence);
  return inputValue;
})


odd.addEventListener("click", () => {
  odd.style.backgroundColor = "green";
  even.style.backgroundColor = "red";
  odd.style.color = "white";
  even.style.color = "white";
  odd.disabled = true;
  even.disabled = true;
  button.disabled = false;
  prefrence = odd;
});

even.addEventListener("click", () => {
  even.style.backgroundColor = "green";
  odd.style.backgroundColor = "red";
  odd.style.color = "white";
  even.style.color = "white";
  odd.disabled = true;
  even.disabled = true;
  button.disabled = false;
  prefrence = even;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = area.value;
  const parsedValue = parseInt(inputValue);
  playGame(parsedValue, prefrence);
  return inputValue;
});

const getCompChoice = () => {
  let random = Math.floor(Math.random() * 5);
  return random;
};

const warn = () => {
  msg.innerText = "Plz Enter Number between 0 to 5";
  msg.style.width = "30vw";
  msg.style.backgroundColor = "red";
  msg.style.color = "white";
};

const playGame = (userChoice, userPrefrence) => {
  const pattern = /^[0-5]$/;
  let test = pattern.test(parseInt(userChoice));
  if (test) {
    let compChoice = parseInt(getCompChoice());
    let sum = userChoice + compChoice;
    if (
      (sum % 2 == 0 && userPrefrence == even) ||
      (sum % 2 != 0 && userPrefrence == odd)
    ) {
      msg.style.backgroundColor = "Green";
      msg.innerText = ` You Won and the sum = ${sum}`;
    } else if (
      (sum % 2 == 0 && userPrefrence == odd) ||
      (sum % 2 != 0 && userPrefrence == even)
    ) {
      msg.style.backgroundColor = "red";
      msg.innerText = ` sorry the sum is ${sum} and your prefernce was ${userPrefrence==odd?'odd':'even'}`;
    }
  } else {
    warn();
  }
};
