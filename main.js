/* ~~~~~~~~~~~~~~~~ Query Selectors ~~~~~~~~~~~~~~~~~*/
var choiceAffirmation = document.getElementById("choice-affirmation");
var choiceMantra = document.getElementById("choice-mantra");
var buddhaIcon = document.querySelector(".meditate-svg");
var messageResult = document.getElementById("message-result");
var messageButton = document.getElementById("receive-message");
var clearButton = document.getElementById("clear-button");
var loader = document.querySelector(".loader");

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
	element.classList.remove("hidden");
};

function getRandom(array) {
	return Math.floor(Math.random() * array.length);
};

function runTimer(functionName, element, time) {
	setTimeout(function() {functionName(element)}, time);
};

function activateButton() {
	messageButton.classList.remove("inactive");
	messageButton.disabled = false;
};

function selectChoice() {
	if (choiceAffirmation.checked) {
		messageResult.innerText = `${affirmations[getRandom(affirmations)]}`;
	} else if (choiceMantra.checked) {
		messageResult.innerText = `${mantras[getRandom(mantras)]}`;
	}
};

function getMessage() {
	hide(buddhaIcon);
	hide(messageResult);
	hide(clearButton);
	show(loader);
	selectChoice();
	runTimer(hide, loader, 500);
	runTimer(fadeIn, messageResult, 500);
	runTimer(fadeIn, clearButton, 500);
};

function clearMessage() {
	hide(messageResult);
	hide(clearButton);
	fadeIn(buddhaIcon);
};
