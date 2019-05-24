const toForm = document.querySelector("form");
const input = toForm.querySelector(".nb__input");
const btn = toForm.querySelector(".nb__btn");
const result = document.querySelector(".nb__result");
const OPDiv = document.querySelector(".nb__OP");
const comment = document.querySelector(".nb__comment");
const img = document.querySelector("nb__img");

let NUMBER_ENTRY = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let NUMBER_CONTAINER = [];
let OP = 10;

for (i = 0; i < 4; i = i + 1) {
  const random = Math.floor(Math.random() * (9 - i));
  const number = NUMBER_ENTRY.splice(random, 1)[0];
  NUMBER_CONTAINER.unshift(number);
}

function handleImg() {
  img.src =
    "file:///C:/Users/user/Documents/project/numberBaseball/images/good.PNG";
}

function handleSubmit(event) {
  event.preventDefault();
  const answer = input.value;
  console.log(answer, NUMBER_CONTAINER);
  console.log(answer.split(""));

  if (answer === NUMBER_CONTAINER.join("")) {
    OP = 10;
    result.innerText = "HomeRun!!!";
    OPDiv.innerText = "OPPERTUNITY:" + OP;
    input.value = "";
    input.focus();
    img = handleImg();
    NUMBER_ENTRY = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    NUMBER_CONTAINER = [];

    for (i = 0; i < 4; i = i + 1) {
      random = Math.floor(Math.random() * (9 - i));
      number = NUMBER_ENTRY.splice(random, 1)[0];
      NUMBER_CONTAINER.unshift(number);
    }
  } else {
    const answerArray = answer.split("");
    let strike = 0;
    let ball = 0;
    OP -= 1;

    if (OP === 0) {
      OP = 10;
      input.value = "";
      input.focus();
      result.innerText = "";
      OPDiv.innerText = "";
      comment.innerText = "Again!!";

      NUMBER_ENTRY = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      NUMBER_CONTAINER = [];

      for (i = 0; i < 4; i = i + 1) {
        random = Math.floor(Math.random() * (9 - i));
        number = NUMBER_ENTRY.splice(random, 1)[0];
        NUMBER_CONTAINER.unshift(number);
      }
    } else {
      for (i = 0; i < 4; i += 1) {
        if (Number(answerArray[i]) === NUMBER_CONTAINER[i]) {
          strike += 1;
        } else if (NUMBER_CONTAINER.indexOf(Number(answerArray[i])) > -1) {
          ball += 1;
        }
      }
      result.innerText = strike + "S" + ball + "B";
      OPDiv.innerText = "OPPERTUNITY:" + OP;
      comment.innerText = "";
      input.value = "";
      input.focus();
    }
  }
}

function init() {
  toForm.addEventListener("submit", handleSubmit);
}

init();
