/* ~~~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~~~~*/
var choiceAffirmation = document.getElementById("choice-affirmation");
var choiceMantra = document.getElementById("choice-mantra");
var buddhaIcon = document.getElementById("meditate-svg");
var messageResult = document.getElementById("message-result");
var messageButton = document.getElementById("receive-message");
var clearButton = document.getElementById("clear");
var loader = document.querySelector(".loader")

/* ~~~~~~~~~~~~~~~~ Event Listeners ~~~~~~~~~~~~~~~~~*/
messageButton.addEventListener("click", getMessage);
clearButton.addEventListener("click", clearMessage);
choiceAffirmation.addEventListener("change", activateButton);
choiceMantra.addEventListener("change", activateButton);

messageButton.disabled = true;

/* ~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~*/
function show(element) {
  element.classList.remove("hidden");
};

function hide(element) {
  element.classList.add("hidden");
};

function fadeIn(element) {
  element.classList.add("fade-in");
  // element.classList.remove("fade-out");
  element.classList.remove("hidden");
}

function fadeOut(element) {
  element.classList.add("fade-out");
  // element.classList.remove("fade-in");
  element.classList.add("hidden");
}

function getRandom(array) {
  return Math.floor(Math.random() * array.length);
};

function runTimer(functionName, element, time) {
  setTimeout(function(){functionName(element)}, time);
};

function selectChoice() {
  if (choiceAffirmation.checked) {
    messageResult.innerText = `${affirmations[getRandom(affirmations)]}`;
  } else if (choiceMantra.checked) {
    messageResult.innerText = `${mantras[getRandom(mantras)]}`;
  }
};

function getMessage() {
  fadeOut(buddhaIcon);
  hide(messageResult);
  hide(clearButton);
  show(loader);
  selectChoice();
  runTimer(hide, loader, 1000);
  runTimer(fadeIn, messageResult, 1000);
  runTimer(fadeIn, clearButton, 1000);
};

function clearMessage() {
  fadeOut(messageResult)
  fadeOut(clearButton)
  fadeIn(buddhaIcon)
};

function activateButton() {
  messageButton.classList.remove("inactive")
  messageButton.disabled = false;
}
